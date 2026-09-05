import mysql from 'mysql2/promise';
import { IDepartment, IUser, IOrder } from './types.js';

export const INITIAL_DEPARTMENTS: IDepartment[] = [
  { id: 1, name: 'Engineering', location: 'Floor 4 - Tech Wing', budget: 2500000 },
  { id: 2, name: 'Data Platforms', location: 'Floor 3 - Server Lab', budget: 1800000 },
  { id: 3, name: 'DevOps & SRE', location: 'Floor 2 - Operations', budget: 1200000 },
  { id: 4, name: 'Product & Design', location: 'Floor 5 - Studio', budget: 950000 }
];

export const INITIAL_USERS: IUser[] = [
  {
    id: 1,
    firstName: 'Marcus',
    lastName: 'Vance',
    email: 'marcus.vance@enterprise.io',
    departmentId: 1,
    salary: 155000,
    role: 'Principal Architect',
    isActive: true,
    createdAt: '2023-01-15T09:00:00Z'
  },
  {
    id: 2,
    firstName: 'Elena',
    lastName: 'Rostova',
    email: 'elena.rostova@enterprise.io',
    departmentId: 1,
    salary: 142000,
    role: 'Staff Engineer',
    isActive: true,
    createdAt: '2023-03-20T10:30:00Z'
  },
  {
    id: 3,
    firstName: 'Devon',
    lastName: 'Taylor',
    email: 'devon.taylor@enterprise.io',
    departmentId: 2,
    salary: 160000,
    role: 'Lead Database Engineer',
    isActive: true,
    createdAt: '2022-11-10T14:15:00Z'
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Chen',
    email: 'sarah.chen@enterprise.io',
    departmentId: 3,
    salary: 138000,
    role: 'Site Reliability Engineer',
    isActive: true,
    createdAt: '2023-07-12T11:45:00Z'
  },
  {
    id: 5,
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@enterprise.io',
    departmentId: 4,
    salary: 125000,
    role: 'Product Manager',
    isActive: false,
    createdAt: '2024-02-01T08:00:00Z'
  }
];

export const INITIAL_ORDERS: IOrder[] = [
  { id: 101, userId: 1, amount: 4500, status: 'COMPLETED', orderDate: '2024-01-10' },
  { id: 102, userId: 1, amount: 1200, status: 'COMPLETED', orderDate: '2024-02-14' },
  { id: 103, userId: 2, amount: 8900, status: 'PENDING', orderDate: '2024-02-28' },
  { id: 104, userId: 3, amount: 3200, status: 'COMPLETED', orderDate: '2024-03-01' }
];

class MockRelationalDatabase {
  private departments: IDepartment[] = JSON.parse(JSON.stringify(INITIAL_DEPARTMENTS));
  private users: IUser[] = JSON.parse(JSON.stringify(INITIAL_USERS));
  private orders: IOrder[] = JSON.parse(JSON.stringify(INITIAL_ORDERS));

  public reset(): void {
    this.departments = JSON.parse(JSON.stringify(INITIAL_DEPARTMENTS));
    this.users = JSON.parse(JSON.stringify(INITIAL_USERS));
    this.orders = JSON.parse(JSON.stringify(INITIAL_ORDERS));
  }

  // Departments
  public getDepartments(): IDepartment[] {
    return [...this.departments];
  }

  public getDepartmentById(id: number): IDepartment | undefined {
    return this.departments.find(d => d.id === id);
  }

  // Users
  public getUsers(includeDepartment = false): IUser[] {
    if (!includeDepartment) return [...this.users];
    return this.users.map(u => ({
      ...u,
      department: this.departments.find(d => d.id === u.departmentId)
    }));
  }

  public getUserById(id: number, includeDepartment = false): IUser | undefined {
    const u = this.users.find(user => user.id === id);
    if (!u) return undefined;
    if (!includeDepartment) return { ...u };
    return {
      ...u,
      department: this.departments.find(d => d.id === u.departmentId)
    };
  }

  public createUser(userData: Omit<IUser, 'id' | 'createdAt'>): IUser {
    const nextId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    const newUser: IUser = {
      id: nextId,
      createdAt: new Date().toISOString(),
      ...userData
    };
    this.users.push(newUser);
    return newUser;
  }

  public updateUser(id: number, updateData: Partial<IUser>): IUser | null {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    this.users[index] = { ...this.users[index], ...updateData };
    return this.users[index];
  }

  public deleteUser(id: number): boolean {
    const initialLen = this.users.length;
    this.users = this.users.filter(u => u.id !== id);
    return this.users.length < initialLen;
  }

  // Orders & Join Metrics
  public getOrders(): IOrder[] {
    return [...this.orders];
  }

  public getUserOrders(userId: number): IOrder[] {
    return this.orders.filter(o => o.userId === userId);
  }
}

export const mockRelationalDb = new MockRelationalDatabase();

let pool: mysql.Pool | null = null;

export async function getDbPool(): Promise<mysql.Pool | null> {
  if (pool) return pool;

  const host = process.env.DB_HOST;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD || process.env.DB_PASS;
  const database = process.env.DB_NAME;

  if (!host || !user || !database) {
    return null;
  }

  try {
    const newPool = mysql.createPool({
      host,
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    // Verify connection
    const connection = await newPool.getConnection();
    connection.release();
    pool = newPool;
    return pool;
  } catch (err) {
    return null;
  }
}
