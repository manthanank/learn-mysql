import { Request, Response, NextFunction } from 'express';
import { mockRelationalDb, getDbPool } from '../db.js';
import { IUser } from '../types.js';

export async function getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
    const departmentId = req.query.departmentId ? parseInt(req.query.departmentId as string) : undefined;
    const search = req.query.search ? (req.query.search as string).toLowerCase() : undefined;
    const includeDepartment = req.query.includeDepartment === 'true';

    const pool = await getDbPool();

    if (pool) {
      try {
        let query = `
          SELECT u.*, d.name AS departmentName, d.location AS departmentLocation
          FROM users u
          LEFT JOIN departments d ON u.departmentId = d.id
          WHERE 1=1
        `;
        const params: (string | number)[] = [];

        if (departmentId) {
          query += ' AND u.departmentId = ?';
          params.push(departmentId);
        }
        if (search) {
          query += ' AND (LOWER(u.firstName) LIKE ? OR LOWER(u.lastName) LIKE ? OR LOWER(u.email) LIKE ?)';
          const searchParam = `%${search}%`;
          params.push(searchParam, searchParam, searchParam);
        }

        query += ' ORDER BY u.id ASC LIMIT ? OFFSET ?';
        params.push(pageSize, (page - 1) * pageSize);

        const [rows] = await pool.query(query, params);
        res.json({
          success: true,
          source: 'mysql-live',
          meta: { page, pageSize },
          data: rows
        });
        return;
      } catch (dbErr) {
        // Fall back to mock if query fails
      }
    }

    // Mock store execution
    let users = mockRelationalDb.getUsers(includeDepartment);

    if (departmentId) {
      users = users.filter(u => u.departmentId === departmentId);
    }
    if (search) {
      users = users.filter(
        u =>
          u.firstName.toLowerCase().includes(search) ||
          u.lastName.toLowerCase().includes(search) ||
          u.email.toLowerCase().includes(search)
      );
    }

    const total = users.length;
    const paginated = users.slice((page - 1) * pageSize, page * pageSize);

    res.json({
      success: true,
      source: 'mock-relational-engine',
      meta: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
      data: paginated
    });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: 'Invalid user ID' });
      return;
    }

    const includeOrders = req.query.includeOrders === 'true';
    const user = mockRelationalDb.getUserById(id, true);

    if (!user) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }

    const responseData: Record<string, unknown> = { ...user };
    if (includeOrders) {
      responseData.orders = mockRelationalDb.getUserOrders(id);
    }

    res.json({ success: true, source: 'mock-relational-engine', data: responseData });
  } catch (err) {
    next(err);
  }
}

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { firstName, lastName, email, departmentId, salary, role } = req.body;

    if (!firstName || !lastName || !email) {
      res.status(400).json({ success: false, error: 'firstName, lastName, and email are required' });
      return;
    }

    const existing = mockRelationalDb.getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      res.status(409).json({ success: false, error: 'User with this email already exists' });
      return;
    }

    const newUser = mockRelationalDb.createUser({
      firstName,
      lastName,
      email,
      departmentId: departmentId || 1,
      salary: salary || 0,
      role: role || 'Member',
      isActive: true
    });

    res.status(201).json({ success: true, source: 'mock-relational-engine', data: newUser });
  } catch (err) {
    next(err);
  }
}

export async function updateUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: 'Invalid user ID' });
      return;
    }

    const updated = mockRelationalDb.updateUser(id, req.body);
    if (!updated) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }

    res.json({ success: true, source: 'mock-relational-engine', data: updated });
  } catch (err) {
    next(err);
  }
}

export async function deleteUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: 'Invalid user ID' });
      return;
    }

    const deleted = mockRelationalDb.deleteUser(id);
    if (!deleted) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }

    res.json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
}

export async function getDepartments(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const depts = mockRelationalDb.getDepartments();
    const users = mockRelationalDb.getUsers();

    const result = depts.map(d => {
      const deptUsers = users.filter(u => u.departmentId === d.id);
      const totalSalary = deptUsers.reduce((sum, u) => sum + (u.salary || 0), 0);
      return {
        ...d,
        employeeCount: deptUsers.length,
        averageSalary: deptUsers.length > 0 ? Math.round(totalSalary / deptUsers.length) : 0
      };
    });

    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}
