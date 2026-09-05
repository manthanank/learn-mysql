import { Request, Response, NextFunction } from 'express';
import { mockRelationalDb } from '../db.js';

export function executeSqlSandbox(req: Request, res: Response, next: NextFunction): void {
  try {
    const { sql } = req.body;

    if (!sql || typeof sql !== 'string') {
      res.status(400).json({ success: false, error: 'SQL query string is required' });
      return;
    }

    const trimmed = sql.trim();
    const upper = trimmed.toUpperCase();

    // Check query type
    if (upper.startsWith('SELECT')) {
      const users = mockRelationalDb.getUsers(true);
      const depts = mockRelationalDb.getDepartments();
      const orders = mockRelationalDb.getOrders();

      if (upper.includes('JOIN') && upper.includes('ORDERS')) {
        const joined = orders.map(o => {
          const u = users.find(user => user.id === o.userId);
          return {
            orderId: o.id,
            amount: o.amount,
            status: o.status,
            orderDate: o.orderDate,
            customerName: u ? `${u.firstName} ${u.lastName}` : 'Unknown',
            customerEmail: u?.email
          };
        });
        res.json({
          success: true,
          mode: 'mock-sandbox',
          queryType: 'SELECT_JOIN',
          rowCount: joined.length,
          columns: Object.keys(joined[0] || {}),
          data: joined
        });
        return;
      }

      if (upper.includes('DEPARTMENTS')) {
        res.json({
          success: true,
          mode: 'mock-sandbox',
          queryType: 'SELECT_DEPARTMENTS',
          rowCount: depts.length,
          columns: ['id', 'name', 'location', 'budget'],
          data: depts
        });
        return;
      }

      // Default users query
      const formatted = users.map(u => ({
        id: u.id,
        name: `${u.firstName} ${u.lastName}`,
        email: u.email,
        department: u.department?.name || 'Unassigned',
        salary: u.salary,
        role: u.role
      }));

      res.json({
        success: true,
        mode: 'mock-sandbox',
        queryType: 'SELECT_USERS',
        rowCount: formatted.length,
        columns: Object.keys(formatted[0] || {}),
        data: formatted
      });
      return;
    }

    res.json({
      success: true,
      mode: 'mock-sandbox',
      message: 'Query parsed and executed successfully (Mock transactional isolation applied)',
      affectedRows: 1
    });
  } catch (err) {
    next(err);
  }
}

export function getSqlSamples(_req: Request, res: Response): void {
  const samples = [
    {
      title: 'Window Function: Dense Rank by Department Salary',
      description: 'Partitions employees by department and ranks them by salary without skipping rank values',
      sql: `SELECT 
    u.firstName, 
    u.lastName, 
    d.name AS department, 
    u.salary,
    DENSE_RANK() OVER (PARTITION BY u.departmentId ORDER BY u.salary DESC) AS salaryRank
FROM users u
INNER JOIN departments d ON u.departmentId = d.id;`
    },
    {
      title: 'Multi-Table Inner & Left Join with Aggregate Metrics',
      description: 'Calculates total orders spend and average order size per customer',
      sql: `SELECT 
    u.id, 
    CONCAT(u.firstName, ' ', u.lastName) AS customerName, 
    d.name AS department, 
    COUNT(o.id) AS totalOrders, 
    COALESCE(SUM(o.amount), 0) AS totalSpent
FROM users u
LEFT JOIN departments d ON u.departmentId = d.id
LEFT JOIN orders o ON u.id = o.userId
GROUP BY u.id, u.firstName, u.lastName, d.name
HAVING totalSpent > 0
ORDER BY totalSpent DESC;`
    },
    {
      title: 'Recursive Common Table Expression (CTE) - Org Hierarchy',
      description: 'Recursively traverses management chains to build an organizational reporting tree',
      sql: `WITH RECURSIVE OrgHierarchy AS (
    -- Anchor member: Top-level executive
    SELECT id, firstName, lastName, reportsTo, 1 AS depth
    FROM employees
    WHERE reportsTo IS NULL
    UNION ALL
    -- Recursive member: Direct reports
    SELECT e.id, e.firstName, e.lastName, e.reportsTo, o.depth + 1
    FROM employees e
    INNER JOIN OrgHierarchy o ON e.reportsTo = o.id
)
SELECT * FROM OrgHierarchy ORDER BY depth, lastName;`
    }
  ];

  res.json({ success: true, samples });
}
