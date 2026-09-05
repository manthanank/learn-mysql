# Gemini AI Guidelines - learn-mysql

## Core Principles
1. **Curriculum Depth**: Provide enterprise-grade MySQL 8 and InnoDB architectural details.
2. **Leftmost Prefixing**: Composite index recommendations must always respect column ordering for filtering, joining, and sorting.
3. **Resilience**: Ensure `mockRelationalDb` in-memory fallback runs tests smoothly without live MySQL credentials.
4. **Testing Integrity**: Ensure all Vitest tests in `src/server.test.ts` pass with 100% success rate.
