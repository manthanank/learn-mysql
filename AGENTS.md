# AI Agents Guidelines - learn-mysql

Welcome to the **learn-mysql** enterprise repository. This codebase contains a comprehensive MySQL 8 and InnoDB architecture curriculum, SQL sandbox, relational schema engine, and EXPLAIN performance analyzer.

## Architecture & Codebase Conventions
- **Language**: TypeScript 5.7+ running on Node.js 20+ with ES Modules (`NodeNext`).
- **Framework**: Express 5 HTTP API with `mysql2/promise` connection pooling.
- **Resilient Fallback**: `src/db.ts` provides an in-memory relational store (`mockRelationalDb`) pre-seeded with relational tables (`users`, `departments`, `orders`) and mock transactions so tests and CI run 100% reliably without requiring an external MySQL server.
- **Key Modules**:
  - `src/controllers/userController.ts`: CRUD endpoints, relational JOINs with department, and order relations.
  - `src/controllers/sqlSandboxController.ts`: Interactive SQL query validator and sample runner.
  - `src/controllers/explainAnalyzerController.ts`: Evaluates access types (`ALL`, `ref`, `range`, `const`) and filesort bottlenecks.
  - `src/server.ts`: Express application setup and static routes.
  - `src/server.test.ts`: Vitest test suite with Supertest.

## Agent Workflows & Constraints
1. **Never Assume Live Database Availability**: Code must gracefully handle cases where `mysql` is disconnected by falling back to `mockRelationalDb`.
2. **Leftmost Prefix & Index Rules**: When writing SQL or recommending indexes, adhere to the Leftmost Prefix Rule for composite indexes and avoid operations causing `Using filesort` or `Using temporary`.
3. **Strict Validation & Typing**: Ensure every payload has rigorous TypeScript types in `src/types.ts`.
4. **Testing Standards**: All changes must pass Vitest tests in `src/server.test.ts`. Run `npm test` and `npm run build` prior to proposing commits.
