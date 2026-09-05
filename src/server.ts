import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { getDbPool } from './db.js';
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getDepartments
} from './controllers/userController.js';
import {
  executeSqlSandbox,
  getSqlSamples
} from './controllers/sqlSandboxController.js';
import { analyzeExplainPlan } from './controllers/explainAnalyzerController.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Health check
app.get('/api/health', async (_req: Request, res: Response) => {
  const pool = await getDbPool();
  res.json({
    status: 'ok',
    service: 'learn-mysql-api',
    version: '2.0.0',
    mode: pool ? 'mysql-live-pool' : 'mock-relational-engine-fallback',
    timestamp: new Date().toISOString()
  });
});

// Users REST API
app.get('/api/users', getUsers);
app.get('/api/users/:id', getUserById);
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUserById);
app.delete('/api/users/:id', deleteUserById);

// Departments
app.get('/api/departments', getDepartments);

// SQL Sandbox & Samples
app.post('/api/sql/execute', executeSqlSandbox);
app.get('/api/sql/samples', getSqlSamples);

// Query Optimization & EXPLAIN Analyzer
app.post('/api/explain', analyzeExplainPlan);

// Fallback HTML route
app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Global Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Server Error:', err.message);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
});

// Launch server if not running in test mode
if (process.env.NODE_ENV !== 'test') {
  getDbPool()
    .then(pool => {
      if (pool) {
        console.log('Connected to MySQL InnoDB Connection Pool.');
      } else {
        console.log('Running with high-performance In-Memory Relational Engine fallback.');
      }
      app.listen(PORT, () => {
        console.log(`MySQL Curriculum Server running on http://localhost:${PORT}`);
      });
    })
    .catch(err => {
      console.error('Database connection error:', err);
      app.listen(PORT, () => {
        console.log(`Server started in fallback mode on port ${PORT}`);
      });
    });
}
