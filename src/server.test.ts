import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { app } from './server.js';
import { mockRelationalDb } from './db.js';

describe('MySQL 8 Enterprise API & SQL Sandbox Suite', () => {
  beforeEach(() => {
    mockRelationalDb.reset();
  });

  describe('GET /api/health', () => {
    it('should return 200 with service metadata', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.service).toBe('learn-mysql-api');
      expect(res.body.version).toBe('2.0.0');
    });
  });

  describe('Relational Users & Department Operations', () => {
    it('should retrieve paginated list of users', async () => {
      const res = await request(app).get('/api/users?page=1&pageSize=3');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.meta.pageSize).toBe(3);
      expect(res.body.data.length).toBe(3);
    });

    it('should join department data when requested', async () => {
      const res = await request(app).get('/api/users?includeDepartment=true');
      expect(res.status).toBe(200);
      expect(res.body.data[0].department).toBeDefined();
      expect(res.body.data[0].department.name).toBeDefined();
    });

    it('should filter users by department ID', async () => {
      const res = await request(app).get('/api/users?departmentId=1');
      expect(res.status).toBe(200);
      expect(res.body.data.every((u: { departmentId: number }) => u.departmentId === 1)).toBe(true);
    });

    it('should retrieve department analytics summary', async () => {
      const res = await request(app).get('/api/departments');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      expect(res.body.data[0].employeeCount).toBeDefined();
      expect(res.body.data[0].averageSalary).toBeDefined();
    });

    it('should create a new user record', async () => {
      const newUser = {
        firstName: 'Lucas',
        lastName: 'Silva',
        email: 'lucas.silva@enterprise.io',
        departmentId: 1,
        salary: 130000,
        role: 'Senior Backend Engineer'
      };

      const res = await request(app).post('/api/users').send(newUser);
      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.email).toBe('lucas.silva@enterprise.io');
      expect(res.body.data.id).toBeDefined();
    });

    it('should reject user creation when required fields are missing', async () => {
      const res = await request(app).post('/api/users').send({ firstName: 'Incomplete' });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('should retrieve user by ID along with relational orders', async () => {
      const res = await request(app).get('/api/users/1?includeOrders=true');
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(1);
      expect(res.body.data.department).toBeDefined();
      expect(Array.isArray(res.body.data.orders)).toBe(true);
    });

    it('should return 404 for non-existent user ID', async () => {
      const res = await request(app).get('/api/users/99999');
      expect(res.status).toBe(404);
    });

    it('should update user record', async () => {
      const res = await request(app).put('/api/users/1').send({ salary: 175000 });
      expect(res.status).toBe(200);
      expect(res.body.data.salary).toBe(175000);
    });

    it('should delete user record', async () => {
      const delRes = await request(app).delete('/api/users/1');
      expect(delRes.status).toBe(200);
      expect(delRes.body.success).toBe(true);

      const getRes = await request(app).get('/api/users/1');
      expect(getRes.status).toBe(404);
    });
  });

  describe('SQL Query Sandbox & EXPLAIN Optimizer', () => {
    it('should return enterprise SQL samples', async () => {
      const res = await request(app).get('/api/sql/samples');
      expect(res.status).toBe(200);
      expect(res.body.samples.length).toBeGreaterThanOrEqual(3);
    });

    it('should execute SELECT query in SQL sandbox', async () => {
      const res = await request(app)
        .post('/api/sql/execute')
        .send({ sql: 'SELECT * FROM users u JOIN orders o ON u.id = o.userId;' });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.rowCount).toBeGreaterThan(0);
    });

    it('should return error when SQL query is missing', async () => {
      const res = await request(app).post('/api/sql/execute').send({});
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('should analyze query and identify index vs table scan in EXPLAIN', async () => {
      const optimalQuery = 'SELECT * FROM users WHERE departmentId = 1 ORDER BY salary DESC;';
      const res = await request(app).post('/api/explain').send({ sql: optimalQuery });
      expect(res.status).toBe(200);
      expect(res.body.optimizerAssessment.plan.type).toBe('ref');
      expect(res.body.optimizerAssessment.isOptimal).toBe(true);
    });

    it('should detect full table scan and warn about filesort', async () => {
      const unindexedQuery = 'SELECT * FROM users ORDER BY createdAt DESC;';
      const res = await request(app).post('/api/explain').send({ sql: unindexedQuery });
      expect(res.status).toBe(200);
      expect(res.body.optimizerAssessment.plan.type).toBe('ALL');
      expect(res.body.optimizerAssessment.plan.extra).toContain('Using filesort');
    });
  });
});
