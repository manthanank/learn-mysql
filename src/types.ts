export interface IDepartment {
  id: number;
  name: string;
  location: string;
  budget: number;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  departmentId: number;
  salary: number;
  role: string;
  isActive: boolean;
  createdAt: string;
  department?: IDepartment;
}

export interface IOrder {
  id: number;
  userId: number;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  orderDate: string;
}

export interface ExplainPlanResult {
  selectType: string;
  table: string;
  partitions?: string | null;
  type: 'const' | 'eq_ref' | 'ref' | 'range' | 'index' | 'ALL';
  possibleKeys: string[];
  key: string | null;
  keyLen: number | null;
  ref: string | null;
  rows: number;
  filtered: number;
  extra: string;
  recommendations: string[];
}
