import { Request, Response } from 'express';
import { ExplainPlanResult } from '../types.js';

export function analyzeExplainPlan(req: Request, res: Response): void {
  const { sql, table = 'users' } = req.body || {};

  if (!sql || typeof sql !== 'string') {
    res.status(400).json({ success: false, error: 'SQL query is required for EXPLAIN analysis' });
    return;
  }

  const upper = sql.toUpperCase();
  const recommendations: string[] = [];

  let accessType: 'const' | 'eq_ref' | 'ref' | 'range' | 'index' | 'ALL' = 'ALL';
  let key: string | null = null;
  let possibleKeys: string[] = [];
  let rows = 500000;
  let filtered = 100.0;
  let extra = '';

  if (/\bWHERE\s+(?:[a-zA-Z_]+\.)?ID\s*=/i.test(sql)) {
    accessType = 'const';
    key = 'PRIMARY';
    possibleKeys = ['PRIMARY'];
    rows = 1;
    filtered = 100.0;
    extra = '';
    recommendations.push('Optimal: Primary key lookup achieves O(1) B+Tree direct traversal.');
  } else if (upper.includes('WHERE') && (upper.includes('DEPARTMENTID') || upper.includes('DEPARTMENT_ID'))) {
    accessType = 'ref';
    key = 'idx_department_salary';
    possibleKeys = ['idx_department_id', 'idx_department_salary'];
    rows = 1250;
    filtered = 85.0;

    if (upper.includes('ORDER BY SALARY')) {
      extra = 'Using index condition';
      recommendations.push(
        'Optimal Composite Index: idx_department_salary covers both the WHERE equality and ORDER BY sorting without filesort.'
      );
    } else {
      extra = '';
      recommendations.push('Index Scan: Traverses secondary B+tree ref keys.');
    }
  } else if (upper.includes('BETWEEN') || upper.includes('>') || upper.includes('<')) {
    accessType = 'range';
    key = 'idx_salary_range';
    possibleKeys = ['idx_salary_range'];
    rows = 15000;
    filtered = 50.0;
    extra = 'Using index condition';
    recommendations.push('Range Scan: Traverses bounded range on B+Tree secondary index.');
  } else {
    accessType = 'ALL';
    key = null;
    possibleKeys = [];
    rows = 500000;
    filtered = 20.0;
    extra = 'Using where; Using filesort';
    recommendations.push(
      'CRITICAL: Full Table Scan (ALL) detected! The optimizer must read all 500,000 pages from InnoDB buffer pool.',
      'Using filesort: Sorting is performed in an in-memory sort_buffer (or temporary disk file). Add a composite index on (filter_field, sort_field).'
    );
  }

  const plan: ExplainPlanResult = {
    selectType: 'SIMPLE',
    table,
    type: accessType,
    possibleKeys,
    key,
    keyLen: key ? 4 : null,
    ref: key === 'const' ? 'const' : null,
    rows,
    filtered,
    extra,
    recommendations
  };

  res.json({
    success: true,
    query: sql,
    optimizerAssessment: {
      plan,
      isOptimal: accessType !== 'ALL' && !extra.includes('filesort'),
      estimatedLatency: accessType === 'const' ? '< 1ms' : accessType === 'ref' ? '< 5ms' : '150ms - 850ms'
    }
  });
}
