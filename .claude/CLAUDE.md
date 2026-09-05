# Claude Guidelines - learn-mysql

## Commands & Workflows
- **Install Dependencies**: `npm install`
- **Development**: `npm run dev` (starts tsx watcher on `src/server.ts`)
- **Run Tests**: `npm test` (executes Vitest in single-run mode)
- **Production Build**: `npm run build` (compiles TypeScript to `dist/`)
- **Production Start**: `npm start`

## Code Standards
- TypeScript ES2022 / NodeNext.
- Explicit `.js` extension on relative module imports.
- Resilient offline fallback via `mockRelationalDb` in `src/db.ts`.
- Parameterized SQL queries using `?` placeholders to prevent SQL injection.
