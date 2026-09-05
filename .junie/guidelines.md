# Junie AI Guidelines - learn-mysql

## Instructions
- Ensure zero breaking changes across REST APIs (`/api/users`, `/api/departments`, `/api/sql/execute`, `/api/explain`, `/api/health`).
- Vitest tests must pass without external environment variables.
- Keep TypeScript types in `src/types.ts` strictly defined.
