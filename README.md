# Learn MySQL: The Complete Beginner-to-Expert Masterclass

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x%20%7C%2022.x-339933?logo=nodedotjs)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![MySQL 8](https://img.shields.io/badge/MySQL-8.0%20%7C%208.4%20LTS-4479A1?logo=mysql)](https://www.mysql.com/)
[![Express](https://img.shields.io/badge/Express-5.0+-000000?logo=express)](https://expressjs.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?logo=vitest)](https://vitest.dev/)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?logo=docker)](https://www.docker.com/)

A definitive, production-grade **beginner-to-expert technical guide** and interactive sandbox for **MySQL 8.0 & 8.4 LTS**. This curriculum starts with zero-prerequisite database concepts, table design, and daily SQL commands, progresses through intermediate server architecture and query execution, delves into the low-level internals of the InnoDB storage engine (Buffer Pool, WAL Redo/Undo logs, MVCC, and Next-Key locking), and culminates in enterprise replication topologies, GTID failover, and high-performance indexing.

---

## Pedagogical Roadmap: Beginner to Expert

```text
+-----------------------------------------------------------------------------------------------+
|                                  THE MYSQL LEARNING JOURNEY                                   |
+-------------------+-------------------+-----------------------+-------------------------------+
| STAGE 1           | STAGE 2           | STAGE 3 & 4           | STAGE 5 & 6                   |
| Absolute Beginner | Intermediate Dev  | Advanced Internals    | Expert Storage & Staff Arch   |
+-------------------+-------------------+-----------------------+-------------------------------+
| • What is MySQL?  | • Two-Tier Arch   | • InnoDB Engine       | • Group Replication & GTID    |
| • Tables & Keys   | • Query Lifecycle | • Buffer Pool & LRU   | • Horizontal Partitioning     |
| • SELECT, WHERE   | • Pluggable Engine| • Redo/Undo & MVCC    | • Zero-Downtime Online DDL    |
| • INSERT, UPDATE  | • Basic Joins     | • B+ Tree Clustered   | • Point-in-Time Recovery      |
| • AUTO_INCREMENT  | • Schema Normaliz.| • EXPLAIN & Optimizer | • 25 Staff Interview Q&A      |
+-------------------+-------------------+-----------------------+-------------------------------+
```

---

## Table of Contents

1. [Stage 1: Absolute Beginner Foundations](#1-stage-1-absolute-beginner-foundations)
   - [What is MySQL? Relational Databases & The SQL Standard](#what-is-mysql-relational-databases--the-sql-standard)
   - [Connecting to MySQL & Essential CLI Commands](#connecting-to-mysql--essential-cli-commands)
   - [Creating Your First Database & Table](#creating-your-first-database--table)
   - [MySQL Data Types Demystified: Numeric, String & Temporal](#mysql-data-types-demystified-numeric-string--temporal)
   - [Primary Keys & `AUTO_INCREMENT` Mechanics](#primary-keys--auto_increment-mechanics)
   - [Basic Data Manipulation: `INSERT`, `SELECT`, `UPDATE`, `DELETE`](#basic-data-manipulation-insert-select-update-delete)
   - [Filtering & Sorting: `WHERE`, `ORDER BY`, and `LIMIT`](#filtering--sorting-where-order-by-and-limit)
2. [Stage 2: Intermediate Server Architecture & Storage Engines](#2-stage-2-intermediate-server-architecture--storage-engines)
   - [MySQL Server Two-Tier Architecture](#mysql-server-two-tier-architecture)
   - [Query Execution Lifecycle](#query-execution-lifecycle)
   - [Pluggable Storage Engine Interface](#pluggable-storage-engine-interface)
3. [Stage 3: InnoDB Storage Engine Deep Dive & ACID Guarantees](#3-stage-3-innodb-storage-engine-deep-dive--acid-guarantees)
   - [Buffer Pool Architecture & LRU Sublists](#buffer-pool-architecture--lru-sublists)
   - [Write-Ahead Logging (WAL) & Redo Log](#write-ahead-logging-wal--redo-log)
   - [Undo Logs, Rollback Segments & MVCC](#undo-logs-rollback-segments--mvcc)
   - [Doublewrite Buffer & Torn Page Protection](#doublewrite-buffer--torn-page-protection)
   - [InnoDB Locking Mechanics: Record, Gap, Next-Key & Deadlocks](#innodb-locking-mechanics-record-gap-next-key--deadlocks)
4. [Stage 4: Advanced SQL, Index Engineering & Query Optimization](#4-stage-4-advanced-sql-index-engineering--query-optimization)
   - [Window Functions (Ranking, Value, Frame Clauses)](#window-functions-ranking-value-frame-clauses)
   - [Common Table Expressions (CTEs) & Recursive Hierarchies](#common-table-expressions-ctes--recursive-hierarchies)
   - [B+Tree Node Structure & Clustered vs Secondary Indexes](#btree-node-structure--clustered-vs-secondary-indexes)
   - [Interpreting EXPLAIN & EXPLAIN ANALYZE Output](#interpreting-explain--explain-analyze-output)
5. [Stage 5: Schema Design, Partitioning & Enterprise Replication](#5-stage-5-schema-design-partitioning--enterprise-replication)
   - [1NF Through BCNF & Strategic Denormalization](#1nf-through-bcnf--strategic-denormalization)
   - [Horizontal Table Partitioning (Range, List, Hash, Key)](#horizontal-table-partitioning-range-list-hash-key)
   - [Replication Topologies: Async, Semi-Sync, Group Replication](#replication-topologies-async-semi-sync-group-replication)
   - [Binary Log Formats & GTID Auto-Positioning](#binary-log-formats--gtid-auto-positioning)
6. [Stage 6: Staff & Principal MySQL Interview Masterclass (25 Q&A)](#6-stage-6-staff--principal-mysql-interview-masterclass-25-qa)
7. [Stage 7: Interactive Platform, Simulator & REST API Reference](#7-stage-7-interactive-platform-simulator--rest-api-reference)

---

## 1. Stage 1: Absolute Beginner Foundations

### What is MySQL? Relational Databases & The SQL Standard

**MySQL** is the world's most widely deployed open-source **Relational Database Management System (RDBMS)**, powering modern web applications at companies like Meta (Facebook), Uber, Netflix, and GitHub.

In MySQL:
- Data is organized into structured **Databases (Schemas)** containing two-dimensional **Tables**.
- Tables consist of **Columns** (fields specifying data types and constraints) and **Rows** (individual records).
- Tables can establish relationships through **Foreign Keys**, ensuring relational integrity.
- Transactions adhere to **ACID** (Atomicity, Consistency, Isolation, Durability) guarantees powered by the **InnoDB** storage engine.

---

### Connecting to MySQL & Essential CLI Commands

Access the MySQL interactive shell via the command-line client:

```bash
# Connect as root user (prompts for password)
mysql -u root -p

# Connect to a remote MySQL server on port 3306
mysql -h db.example.com -P 3306 -u myuser -p mydatabase
```

Once inside the MySQL prompt (`mysql>`), use these everyday commands:

```sql
-- List all databases on the server
SHOW DATABASES;

-- Select a database to work with
USE my_company_db;

-- List all tables in the currently active database
SHOW TABLES;

-- Inspect column names, data types, and nullability of a table
DESCRIBE employees;

-- Check server version and current user
SELECT VERSION(), CURRENT_USER();
```

---

### Creating Your First Database & Table

```sql
-- 1. Create a database with UTF-8 character encoding
CREATE DATABASE IF NOT EXISTS store_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE store_db;

-- 2. Create an orders table with constraints
CREATE TABLE IF NOT EXISTS orders (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'paid', 'shipped', 'cancelled') DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
```

---

### MySQL Data Types Demystified: Numeric, String & Temporal

Choosing the optimal data type reduces storage consumption and accelerates memory caching:

| Category | Data Type | Storage Size | Ideal Use Case |
| :--- | :--- | :--- | :--- |
| **Integer** | `TINYINT` | 1 Byte (-128 to 127) | Boolean flags (0/1), age |
| **Integer** | `INT UNSIGNED` | 4 Bytes (0 to 4.29 Billion) | Standard auto-increment IDs |
| **Integer** | `BIGINT UNSIGNED` | 8 Bytes (0 to 18 Quintillion) | High-volume distributed IDs |
| **Decimal** | `DECIMAL(M, D)` | Exact Precision | Currency, financial balances |
| **String** | `VARCHAR(N)` | Variable + 1-2 bytes length | Usernames, emails, titles |
| **String** | `TEXT` | Variable (up to 64KB) | Blog bodies, long descriptions |
| **Temporal**| `DATETIME` | 5 Bytes (Year 1000 to 9999) | Explicit dates independent of timezone |
| **Temporal**| `TIMESTAMP` | 4 Bytes (UTC internally) | Audit trails (`created_at`, `updated_at`) |

---

### Primary Keys & `AUTO_INCREMENT` Mechanics

Every relational table requires a **Primary Key** to uniquely distinguish each row. In MySQL with InnoDB, the primary key defines the **Clustered Index**, meaning the actual table rows are physically organized on disk in primary key order:

```sql
CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(100) NOT NULL,
    price DECIMAL(8, 2) NOT NULL
);
```

When you insert a row without specifying `id`, MySQL automatically assigns `id = 1`, `id = 2`, etc. You can fetch the generated ID in application code via `SELECT LAST_INSERT_ID()`.

---

### Basic Data Manipulation: `INSERT`, `SELECT`, `UPDATE`, `DELETE`

```sql
-- 1. INSERT (Create)
INSERT INTO products (sku, title, price)
VALUES 
    ('TECH-001', 'Mechanical Keyboard', 129.99),
    ('TECH-002', 'Wireless Gaming Mouse', 79.50);

-- 2. SELECT (Read)
SELECT sku, title, price 
FROM products;

-- 3. UPDATE (Modify existing rows)
UPDATE products
SET price = 119.99
WHERE sku = 'TECH-001';

-- 4. DELETE (Remove rows)
DELETE FROM products
WHERE sku = 'TECH-002';
```

---

### Filtering & Sorting: `WHERE`, `ORDER BY`, and `LIMIT`

```sql
-- Filter with multiple boolean conditions
SELECT title, price
FROM products
WHERE price BETWEEN 50.00 AND 150.00
  AND title LIKE '%Keyboard%'
ORDER BY price DESC
LIMIT 5 OFFSET 0;
```

---

## 2. Stage 2: Intermediate Server Architecture & Storage Engines

---

### MySQL Server Two-Tier Architecture

MySQL is architected as a two-tier system decoupling the **SQL Layer (Server Layer)** from the **Storage Engine Layer**:

```
+-----------------------------------------------------------------------+
|                           CLIENT APPLICATIONS                         |
|        (Node.js / mysql2, Python / SQLAlchemy, Java / JDBC, Go)       |
+-----------------------------------------------------------------------+
                                   |  TCP/IP, Unix Sockets, Shared Memory
                                   v
+-----------------------------------------------------------------------+
|                           MYSQL SERVER LAYER                          |
|                                                                       |
|  +-----------------------------------------------------------------+  |
|  | Connection Pool & Thread Handler (Authentication, Privileges)  |  |
|  +-----------------------------------------------------------------+  |
|                                  |                                    |
|  +-----------------------------------------------------------------+  |
|  | SQL Parser & Preprocessor (AST Generation, Semantic Validation) |  |
|  +-----------------------------------------------------------------+  |
|                                  |                                    |
|  +-----------------------------------------------------------------+  |
|  | Cost-Based Query Optimizer (Index Selection, Join Ordering)     |  |
|  +-----------------------------------------------------------------+  |
|                                  |                                    |
|  +-----------------------------------------------------------------+  |
|  | Query Execution Engine (Row-by-Row Handler Interface)          |  |
|  +-----------------------------------------------------------------+  |
+-----------------------------------------------------------------------+
                                   |  Handler API (read_row, write_row)
                                   v
+-----------------------------------------------------------------------+
|                      PLUGGABLE STORAGE ENGINE LAYER                   |
|                                                                       |
|  +-------------+  +-------------+  +-------------+  +--------------+  |
|  |   InnoDB    |  |   MyISAM    |  |   Memory    |  |     CSV      |  |
|  |  (Default)  |  |  (Legacy)   |  |  (In-RAM)   |  | (Flat Files) |  |
|  +-------------+  +-------------+  +-------------+  +--------------+  |
+-----------------------------------------------------------------------+
                                   |  POSIX File I/O / O_DIRECT
                                   v
+-----------------------------------------------------------------------+
|                       OPERATING SYSTEM & DISK I/O                     |
|           (NVMe SSDs, SAN, Filesystem Page Cache, Block Devices)       |
+-----------------------------------------------------------------------+
```

1. **Connection Handling & Security**:
   - Manages client authentication, TLS handshakes, and session threads.
   - Utilizes thread caching (`thread_cache_size`) or enterprise thread pools to prevent thread creation thrashing under high concurrency.
2. **SQL Parser & Preprocessor**:
   - Tokenizes raw SQL string into an Abstract Syntax Tree (AST).
   - Validates schema existence (table and column validation) and user object permissions.
3. **Cost-Based Optimizer (CBO)**:
   - Evaluates multiple execution plans and computes a cost score based on disk reads, CPU cycles, and buffer pool page lookups.
   - Selects index usage, join ordering, and subquery flattening strategies.
4. **Execution Engine**:
   - Traverses the optimal physical plan by invoking standardized methods of the Storage Engine Handler API (`ha_innobase::index_read`, `ha_innobase::rnd_next`).

---

## 3. Stage 3: InnoDB Storage Engine Deep Dive & ACID Guarantees

### InnoDB Storage Engine Deep Dive

InnoDB is the default, ACID-compliant, high-performance transaction storage engine in MySQL 8.

```
+-------------------------------------------------------------------------+
|                         INNODB IN-MEMORY STRUCTURES                     |
|                                                                         |
|  +-------------------------------------------------------------------+  |
|  |                           BUFFER POOL                             |  |
|  |  +-----------------------------+  +----------------------------+  |  |
|  |  |      Young Sublist (5/8)    |  |     Old Sublist (3/8)      |  |  |
|  |  |  (Frequently accessed data) |  | (Newly read / scan pages)  |  |  |
|  |  +-----------------------------+  +----------------------------+  |  |
|  |                                                                   |  |
|  |  [Free List]  <--->  [Flush List (Dirty Pages)]  <--->  [LRU List]|  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  +---------------------+  +--------------------+  +------------------+  |
|  |    Change Buffer    |  | Adaptive Hash (AHI)|  | Log Buffer (WAL) |  |
|  +---------------------+  +--------------------+  +------------------+  |
+-------------------------------------------------------------------------+
                                   |  Background Threads (Master, Page Cleaner)
                                   v
+-------------------------------------------------------------------------+
|                         INNODB ON-DISK STRUCTURES                       |
|                                                                         |
|  +-----------------------------+     +-------------------------------+  |
|  |      System Tablespace      |     |  File-Per-Table Tablespaces   |  |
|  | (ibdata1 - Data Dictionary) |     |  (*.ibd - Clustered & Indexes)|  |
|  +-----------------------------+     +-------------------------------+  |
|                                                                         |
|  +-----------------------------+     +-------------------------------+  |
|  |      Doublewrite Buffer     |     |           Undo Logs           |  |
|  | (ib_dwb - Torn page shield) |     | (undo_001, undo_002 - MVCC)   |  |
|  +-----------------------------+     +-------------------------------+  |
|                                                                         |
|  +-----------------------------+     +-------------------------------+  |
|  |          Redo Logs          |     |          Binary Logs          |  |
|  | (ib_logfile0, ib_logfile1)  |     | (binlog.000001 - Replication) |  |
|  +-----------------------------+     +-------------------------------+  |
+-------------------------------------------------------------------------+
```

### Buffer Pool Architecture & LRU Sublists
The Buffer Pool caches index and data pages in memory, bridging the gap between CPU cycles and storage I/O.
- **Page Size**: Defaults to 16KB (`innodb_page_size`).
- **Sizing Rule**: In dedicated database hosts, `innodb_buffer_pool_size` is typically configured to **70% - 80% of total physical RAM**.
- **Buffer Pool Instances**: Divided into multiple chunks (`innodb_buffer_pool_instances = 8` or 16) to eliminate mutex contention during concurrent page allocation.
- **Modified LRU Algorithm**:
  - Traditional LRU suffers from cache thrashing during sequential table scans (e.g., mysqldump).
  - InnoDB divides the LRU list into **Young (New)** (default 5/8 or 62.5%) and **Old** (default 3/8 or 37.5%).
  - New pages enter at the midpoint (head of the Old sublist).
  - A page only moves to the Young sublist if it is accessed again after `innodb_old_blocks_time` milliseconds (default 1000ms), protecting the cache from one-off bulk reads.

### Write-Ahead Logging (WAL) & Redo Log
To guarantee **Durability** without forcing synchronous 16KB random disk writes on every commit, InnoDB uses Write-Ahead Logging:
1. When a transaction modifies a page, the change is applied to the Buffer Pool page in memory (marking it "dirty") and written sequentially to the in-memory **Log Buffer**.
2. Upon `COMMIT`, the Log Buffer is flushed to the on-disk **Redo Log** (`ib_logfile0`, `ib_logfile1` or dynamic redo log files in MySQL 8.0.30+).
3. The disk write is sequential (high IOPS throughput) rather than random 16KB block writes.
4. Flushing behavior is controlled by `innodb_flush_log_at_trx_commit`:
   - `1` (Default / ACID): Flush to disk on every commit. Zero data loss.
   - `0`: Log buffer written and flushed to disk once per second. Up to 1 second of transactions lost on crash.
   - `2`: Log buffer written to OS file cache on commit, flushed to disk once per second. Survives MySQL crash, vulnerable to OS panic or power outage.

### Undo Logs, Rollback Segments & MVCC
Undo logs store historical versions of modified rows:
- **Transaction Rollback**: Enables the engine to revert modifications if a transaction aborts.
- **Multi-Version Concurrency Control (MVCC)**: Allows readers to view consistent snapshots of data without acquiring table or row locks.
- **Structure**: Undo logs are managed within rollback segments in dedicated undo tablespaces (`undo_001`, `undo_002`).
- **Purge Threads**: Background workers that physically prune undo log pages once no active transaction read view requires that version.

### Doublewrite Buffer & Torn Page Protection
- Operating system filesystems typically write in **4KB blocks**, whereas InnoDB pages are **16KB**.
- A power loss or kernel panic during a 16KB page write can result in a **partial page write (torn page)**, corrupting the page header and data checksum.
- Redo logs cannot repair a torn page because redo entries apply delta diffs to an intact page structure.
- **Solution**: Before writing pages to their data files (`.ibd`), InnoDB writes them contiguously to the **Doublewrite Buffer** on disk and executes an `fsync()`. If a crash occurs during the subsequent `.ibd` write, InnoDB restores the intact original page from the doublewrite buffer before applying redo logs.

### Adaptive Hash Index (AHI) & Change Buffer
- **Adaptive Hash Index (AHI)**: Automatically builds an in-memory hash table on top of heavily accessed B+Tree pages (`innodb_adaptive_hash_index = ON`), turning O(log N) tree navigations into O(1) pointer lookups.
- **Change Buffer**: Caches modifications to secondary index pages that are not currently in the Buffer Pool, merging them into memory asynchronously when the pages are later loaded by queries.

---

### ACID Guarantees & Transaction Isolation

### Mechanical Implementation of ACID

| ACID Property | Real-World Database Guarantee | InnoDB Implementation Mechanism |
| :--- | :--- | :--- |
| **Atomicity** | All statements in a transaction commit successfully, or all changes are rolled back. | **Undo Logs** record inverse operations (e.g. `INSERT` -> inverse `DELETE`, `UPDATE` -> old values). |
| **Consistency** | Database transitions only from one valid state to another, maintaining constraints. | **Foreign Key Constraints**, `CHECK` constraints, Unique indexes, and Doublewrite buffer data integrity. |
| **Isolation** | Concurrent transactions execute without interfering with one another's intermediate state. | **MVCC (Multi-Version Concurrency Control)** for non-locking reads; **Next-Key Locks** for write operations. |
| **Durability** | Once committed, changes survive server crashes, OS failures, and power outages. | **Redo Log (WAL)** flushed via `fsync()`, backed by the Doublewrite Buffer and battery-backed storage controllers. |

---

### The 4 ANSI SQL Isolation Levels

MySQL provides four transaction isolation levels configured globally or per session via:
```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ; -- Default
```

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Mechanism Summary |
| :--- | :---: | :---: | :---: | :--- |
| **READ UNCOMMITTED** | Yes | Yes | Yes | Reads latest uncommitted memory state. Zero isolation. |
| **READ COMMITTED** | No | Yes | Yes | Generates a fresh **Read View** on every individual `SELECT` statement. |
| **REPEATABLE READ** | No | No | No (InnoDB) | Generates a single **Read View** at transaction start. Employs **Next-Key Locking** for updates. |
| **SERIALIZABLE** | No | No | No | Automatically converts all plain `SELECT` queries into `SELECT ... FOR SHARE` (shared locks). |

---

### Concurrency Phenomena & Inconsistencies

1. **Dirty Read**: Transaction T1 modifies a row without committing. Transaction T2 reads the uncommitted value. T1 rolls back; T2 has acted on invalid data that never existed.
2. **Non-Repeatable Read (Fuzzy Read)**: Transaction T1 reads a row. Transaction T2 updates or deletes that row and commits. T1 re-reads the row and observes altered column values.
3. **Phantom Read**: Transaction T1 queries a range of rows (`WHERE salary > 50000`). Transaction T2 inserts a new row matching that range and commits. T1 re-executes the range query and discovers a new "phantom" row.
4. **Serialization Anomaly**: The outcome of concurrent transactions cannot be reproduced by any serial execution order.

---

### InnoDB Locking Mechanics: Record, Gap, Next-Key & Deadlocks

InnoDB implements row-level locking mapped to index records. If a query does not use an index, InnoDB must escalate to locking every record in the table!

```
                    Index Records on 'department_id':
           [10]                  [20]                  [30]
            |                     |                     |
  <-------->|<------------------->|<------------------->|<-------->
   Gap (-inf, 10)    Gap (10, 20)          Gap (20, 30)   Gap (30, +inf)

  * Record Lock: Locks only [20]
  * Gap Lock:    Locks the interval (10, 20), preventing other txns from inserting 15.
  * Next-Key:    Locks (10, 20] -> Combination of Gap Lock (10, 20) + Record Lock on [20].
```

#### 1. Record Lock
Locks the physical index record itself. For example:
```sql
SELECT * FROM users WHERE id = 100 FOR UPDATE;
```
If `id` is a primary key or unique index, InnoDB acquires an exclusive record lock solely on record `100`.

#### 2. Gap Lock
Locks a gap between index records, or the gap before the first or after the last record.
- Gap locks prevent other transactions from inserting into the gap, completely eliminating **Phantom Reads**.
- Gap locks can co-exist: multiple transactions can hold gap locks on the same gap simultaneously.

#### 3. Next-Key Lock
The combination of an index record lock and a gap lock on the gap immediately preceding the record.
- In `REPEATABLE READ`, InnoDB uses Next-Key locking for searches and index scans.
- When searching a unique index with an exact equality condition (`WHERE id = 5`), InnoDB degrades the Next-Key lock to a simple Record Lock.

#### 4. Insert Intention Lock
A special type of gap lock set by `INSERT` operations prior to row insertion. It signals that if multiple transactions are inserting into different positions within the same gap, they do not need to block one another (e.g. inserting values 12 and 14 into gap (10, 20) proceeds concurrently).

#### 5. Deadlock Detection & Resolution
A deadlock occurs when two or more transactions mutually block each other:
- Transaction 1: Holds lock on row A, requests lock on row B.
- Transaction 2: Holds lock on row B, requests lock on row A.

InnoDB's deadlock detector (`innodb_deadlock_detect = ON`) traverses the transaction wait-for graph:
1. Detects cycle in the graph.
2. Automatically elects the transaction with the smallest undo log volume (least cost to revert) as the **victim**.
3. Rolls back the victim transaction and returns MySQL error: `ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction`.

Production architecture must implement retry wrappers with exponential jitter to seamlessly handle deadlock retries:
```typescript
async function withDeadlockRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      if (err.errno === 1213 && attempt < maxRetries) {
        const backoff = Math.random() * 50 * Math.pow(2, attempt);
        await new Promise(res => setTimeout(res, backoff));
        continue;
      }
      throw err;
    }
  }
  throw new Error('Max retries exceeded');
}
```

---

## 4. Stage 4: Advanced SQL, Index Engineering & Query Optimization

### Advanced SQL & Relational Algebra

### Window Functions (Ranking, Value, Frame Clauses)

Window functions compute values across a defined subset of rows without collapsing the result set into a single summary row.

```sql
SELECT 
    id,
    name,
    department_id,
    salary,
    -- Ranking within department
    ROW_NUMBER() OVER w AS row_num,
    RANK() OVER w AS dept_rank,
    DENSE_RANK() OVER w AS dense_dept_rank,
    -- Value navigation
    LAG(salary, 1, 0) OVER w AS prev_salary,
    LEAD(salary, 1, 0) OVER w AS next_salary,
    -- Running total with explicit frame clause
    SUM(salary) OVER (
        PARTITION BY department_id 
        ORDER BY salary DESC
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_dept_total,
    -- Moving 3-row moving average
    AVG(salary) OVER (
        PARTITION BY department_id 
        ORDER BY salary DESC
        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
    ) AS moving_avg_3rows
FROM users
WINDOW w AS (PARTITION BY department_id ORDER BY salary DESC);
```

#### Framing Semantics
- `ROWS`: Operates on physical row offsets relative to the current row.
- `RANGE`: Operates on logical value offsets (treats duplicate order values identically).
- Default Frame with `ORDER BY`: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`.
- Default Frame without `ORDER BY`: `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`.

---

### Common Table Expressions (CTEs) & Recursive Hierarchies

CTEs define named temporary result sets within statement scope, improving readability and enabling recursive tree traversal.

#### Non-Recursive CTE Pipeline
```sql
WITH HighEarners AS (
    SELECT id, name, department_id, salary
    FROM users
    WHERE salary >= 100000
),
DeptAggregates AS (
    SELECT 
        department_id,
        COUNT(*) AS high_earner_count,
        AVG(salary) AS avg_high_salary
    FROM HighEarners
    GROUP BY department_id
)
SELECT 
    d.name AS department_name,
    COALESCE(da.high_earner_count, 0) AS high_earners,
    ROUND(COALESCE(da.avg_high_salary, 0), 2) AS average_executive_comp
FROM departments d
LEFT JOIN DeptAggregates da ON d.id = da.department_id
ORDER BY high_earners DESC;
```

#### Recursive CTE: Organizational Hierarchy Traversal
Recursively generates an employee reporting chain from CEO down to staff engineers:
```sql
WITH RECURSIVE EmployeeHierarchy AS (
    -- Anchor member: Root nodes (e.g. Chief Executive Officer)
    SELECT 
        id, 
        name, 
        manager_id, 
        1 AS depth, 
        CAST(name AS CHAR(1000)) AS reporting_chain
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive member: Traverse descendants
    SELECT 
        e.id, 
        e.name, 
        e.manager_id, 
        eh.depth + 1, 
        CONCAT(eh.reporting_chain, ' -> ', e.name)
    FROM employees e
    INNER JOIN EmployeeHierarchy eh ON e.manager_id = eh.id
)
SELECT depth, name, reporting_chain 
FROM EmployeeHierarchy
ORDER BY depth, name;
```

---

### Join Strategies: NLJ, Block Nested-Loop & Hash Join

The MySQL optimizer selects among three primary physical join algorithms:

```
1. Simple Nested-Loop Join (NLJ):
   For each row in Outer Table R:
       For each row in Inner Table S matching condition:
           Emit joined row

2. Block Nested-Loop Join (BNL - Legacy MySQL 5.7):
   Loads batches of Outer Table R into Join Buffer in memory.
   Scans Inner Table S once per buffer batch.

3. Hash Join (Default in MySQL 8.0.18+ for unindexed joins):
   Phase 1 (Build): Hash the smaller table into an in-memory hash table on join key.
   Phase 2 (Probe): Scan the larger table and probe hash buckets for matches.
```

```sql
-- Force Hash Join via optimizer hint (MySQL 8)
SELECT /*+ HASH_JOIN(u, d) */
    u.id, u.name, d.name AS dept_name
FROM users u
JOIN departments d ON u.department_id = d.id;
```

#### Lateral Derived Tables
Allows derived tables to reference columns from preceding tables in the `FROM` clause:
```sql
SELECT u.name, top_orders.order_id, top_orders.amount
FROM users u,
LATERAL (
    SELECT o.id AS order_id, o.amount
    FROM orders o
    WHERE o.user_id = u.id
    ORDER BY o.amount DESC
    LIMIT 2
) AS top_orders;
```

---

### Native JSON Data Type & JSON_TABLE Virtualization

MySQL 8 stores JSON in an optimized binary format featuring fast key lookup without parsing the entire text document.

```sql
-- Schema with native JSON column
CREATE TABLE user_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    metadata JSON NOT NULL,
    -- Virtual generated column extracted from JSON for B+Tree indexing
    country VARCHAR(64) GENERATED ALWAYS AS (metadata->>'$.address.country') VIRTUAL,
    INDEX idx_user_country (country)
);

-- Querying with JSON operators
SELECT 
    id,
    metadata->'$.theme' AS raw_theme,               -- Quotes preserved
    metadata->>'$.address.city' AS unquoted_city,     -- Strips quotes (inline path operator)
    JSON_CONTAINS(metadata, '["admin", "dev"]', '$.roles') AS is_developer
FROM user_profiles
WHERE metadata->>'$.status' = 'ACTIVE';

-- JSON_TABLE: Transform JSON arrays into relational tabular projections
SELECT 
    up.user_id,
    skills.skill_name,
    skills.years_exp
FROM user_profiles up,
JSON_TABLE(
    up.metadata,
    '$.skills[*]' COLUMNS (
        skill_name VARCHAR(50) PATH '$.name',
        years_exp INT PATH '$.years'
    )
) AS skills;
```

---

### Index Engineering & B+Tree Internals

### B+Tree Node Structure & Clustered vs Secondary Indexes

In InnoDB, all user tables are organized physically as **B+Tree Index-Organized Tables**:

```
+--------------------------------------------------------------------------+
|                    CLUSTERED INDEX (PRIMARY KEY B+TREE)                  |
|                                                                          |
|                            [ Root Node: Page 3 ]                         |
|                             /                 \                          |
|             [ Non-Leaf Page 20 ]             [ Non-Leaf Page 21 ]        |
|               /              \                 /              \          |
|      [ Leaf Page 100 ] <-> [ Leaf Page 101 ] <-> [ Leaf Page 102 ]      |
|      (Key=1, Data=...)     (Key=50, Data=..)     (Key=100, Data=.)       |
|      <----------------- Doubly Linked List ---------------------->       |
+--------------------------------------------------------------------------+

                                    vs

+--------------------------------------------------------------------------+
|                   SECONDARY INDEX (e.g. idx_email B+TREE)                |
|                                                                          |
|                            [ Root Node: Page 5 ]                         |
|                             /                 \                          |
|             [ Leaf Page 200 ] <-------------> [ Leaf Page 201 ]          |
|             (Email: 'a@x', PK=1)              (Email: 'z@x', PK=102)     |
+--------------------------------------------------------------------------+
                                       |
                     Bookmark Lookup (Secondary -> Primary Key)
                                       v
                     Clustered Index Navigation to Fetch Full Row
```

1. **Clustered Index (Primary Key)**:
   - Leaf pages store the **complete row payload** (all user data columns, plus internal system columns `DB_TRX_ID` and `DB_ROLL_PTR`).
   - Every InnoDB table MUST have exactly one clustered index. If no explicit `PRIMARY KEY` is declared, InnoDB selects the first non-nullable `UNIQUE` key, or auto-generates a 6-byte hidden row ID (`DB_ROW_ID`).
2. **Secondary Indexes**:
   - Leaf pages store **only the indexed columns plus the value of the Primary Key**.
   - Searching via a secondary index that requires non-indexed columns causes a **Bookmark Lookup (Back-to-Table roundtrip)**: finding the PK in the secondary index, then traversing the Clustered B+Tree to retrieve the row.

---

### The Leftmost Prefix Rule & Multi-Column Ordering

For a composite index on columns `(A, B, C)`:
- Keys are sorted lexicographically: primary sort by `A`, secondary sort by `B` where `A` is identical, tertiary sort by `C` where `A` and `B` are identical.

```sql
CREATE INDEX idx_dept_role_salary ON users (department_id, role, salary);
```

| Query Pattern | Index Usage Assessment |
| :--- | :--- |
| `WHERE department_id = 1` | **Full Match on A**. Traverses B+Tree efficiently. |
| `WHERE department_id = 1 AND role = 'ENG'` | **Full Match on (A, B)**. Highly selective. |
| `WHERE department_id = 1 AND role = 'ENG' AND salary > 80000` | **Full Match on (A, B, C)**. Range condition on `salary` marks the end of index search. |
| `WHERE department_id = 1 AND salary > 80000` | **Partial Match**: Uses index for `department_id`, then employs Index Condition Pushdown (ICP) for `salary`. |
| `WHERE role = 'ENG'` | **CANNOT USE INDEX**: Skips leading column `department_id`. Results in full table scan! |
| `WHERE role = 'ENG' AND salary = 50000` | **CANNOT USE INDEX**: Violates Leftmost Prefix rule. |

> [!IMPORTANT]
> **Range Traversal Rule**: Once a range operator (`<`, `>`, `BETWEEN`, `LIKE 'prefix%'`) is encountered on a column, subsequent columns in the composite index CANNOT be used for tree seeking!

---

### Covering Indexes (Index-Only Scans)

An index is **Covering** when all columns referenced in the `SELECT`, `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY` clauses exist entirely within the index leaf node.

```sql
-- Query only requests fields present in idx_dept_role_salary (plus implicit Primary Key 'id')
SELECT id, department_id, role, salary
FROM users
WHERE department_id = 4 AND role = 'ARCHITECT';
```

- **Execution Benefit**: Zero Clustered Index bookmark lookups! The entire query executes directly inside the secondary index B+Tree leaf pages.
- **EXPLAIN Verification**: Indicated by `Using index` in the `Extra` column.

---

### Functional, Invisible & Multi-Valued Indexes

#### 1. Functional Indexes
Directly index the result of deterministic expressions or functions without creating explicit virtual columns:
```sql
CREATE INDEX idx_user_lower_email ON users ((LOWER(email)));

-- The optimizer will match this index directly:
SELECT * FROM users WHERE LOWER(email) = 'lead.engineer@enterprise.io';
```

#### 2. Invisible Indexes
Safely test whether an index can be dropped in production without actually deleting it:
```sql
-- Mark index invisible to optimizer
ALTER TABLE users ALTER INDEX idx_user_legacy INVISIBLE;

-- If query latency spikes, restore visibility immediately without rebuilding index:
ALTER TABLE users ALTER INDEX idx_user_legacy VISIBLE;
```

#### 3. Multi-Valued Indexes
Indexes JSON arrays in MySQL 8.0.17+:
```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    tags JSON,
    INDEX idx_tags ((CAST(tags AS UNSIGNED ARRAY)))
);

SELECT * FROM products WHERE 42 MEMBER OF (tags);
```

---

### Anti-Patterns: SARGability, Type Coercion & Leading Wildcards

1. **Non-SARGable WHERE Expressions**:
   - Bad: `WHERE DATE(created_at) = '2026-09-05'` (Function call prevents B+Tree range seek; triggers full table scan).
   - Good: `WHERE created_at >= '2026-09-05 00:00:00' AND created_at < '2026-09-06 00:00:00'`.
2. **Implicit Type Coercion**:
   - Bad: `WHERE phone_varchar = 9876543210` (Integer literal forces MySQL to cast every string row to integer via `CAST(phone_varchar AS SIGNED)`, invalidating index).
   - Good: `WHERE phone_varchar = '9876543210'`.
3. **Leading Wildcard LIKE Scans**:
   - Bad: `WHERE username LIKE '%smith'` (Cannot seek B+Tree from start).
   - Good: Use Full-Text Search (`MATCH(username) AGAINST(...)`) or reverse string indexing.
4. **Negation Queries**:
   - `!=`, `<>`, `NOT IN` rarely use indexes because B+Tree is optimized for locating contiguous values, not omissions.

---

### Query Optimization & EXPLAIN Analyzer

### Interpreting EXPLAIN & EXPLAIN ANALYZE Output

MySQL provides `EXPLAIN` to view the static optimizer plan, and `EXPLAIN ANALYZE` (MySQL 8.0.18+) to execute the query and report actual timing per tree node:

```sql
EXPLAIN ANALYZE
SELECT u.id, u.name, d.name AS dept_name
FROM users u
JOIN departments d ON u.department_id = d.id
WHERE u.salary > 80000;
```

Sample output tree:
```
-> Nested loop inner join  (cost=1420.50 rows=1250) (actual time=0.082..4.120 rows=1250 loops=1)
    -> Filter: (u.salary > 80000.00)  (cost=125.50 rows=1250) (actual time=0.045..1.850 rows=1250 loops=1)
        -> Index range scan on u using idx_salary  (cost=125.50 rows=1250) (actual time=0.041..1.210 rows=1250 loops=1)
    -> Single-row index lookup on d using PRIMARY (id=u.department_id)  (cost=0.95 rows=1) (actual time=0.001..0.001 rows=1 loops=1250)
```

- `actual time=A..B`: `A` is the time in milliseconds to produce the first row; `B` is the time to produce all rows.
- `rows=N`: The actual row count produced by this iterator node.
- `loops=M`: How many times this iterator was invoked (e.g. 1250 loop lookups for the inner table).

---

### Join Types Hierarchy (system to ALL)

The `type` column in traditional `EXPLAIN` indicates how MySQL accesses the table. Ranked from highest performance to poorest:

| Access Type | Relative Speed | Technical Meaning & When It Occurs |
| :--- | :--- | :--- |
| **system** | Fastest | Table has exactly one row (system table). |
| **const** | Instant (< 1ms) | Primary key or unique index matched with a constant value (`WHERE id = 42`). |
| **eq_ref** | Optimal | Exactly one row read from this table for each combination of rows from the prior table (`ON a.id = b.a_id` where `b.a_id` is PK/Unique). |
| **ref** | High | Matches rows using a non-unique index or index prefix (`WHERE dept_id = 10`). |
| **fulltext** | Variable | Fulltext index search via `MATCH(...) AGAINST(...)`. |
| **ref_or_null** | Good | Like `ref`, but specifically searches for `NULL` values too. |
| **index_merge**| Medium | Uses two indexes and merges their primary key sets (`idx_a` and `idx_b`). Often signals a missing composite index. |
| **unique_subquery**| Medium | Replaces `IN (SELECT id FROM ...)` with unique index lookup. |
| **index_subquery** | Medium | Replaces `IN (SELECT ...)` with non-unique index lookup. |
| **range** | Acceptable | Index scan extracting rows within a bounded range (`BETWEEN`, `<`, `>`, `IN(...)`). |
| **index** | Poor | Full Index Scan. Reads entire B+Tree from start to end without seeking. |
| **ALL** | Worst | **Full Table Scan**. Reads all pages from disk/buffer pool sequentially. |

---

### Decoding Extra Flags: filesort, temporary, index condition

| Extra Flag | Meaning & Impact | Performance Action |
| :--- | :--- | :--- |
| `Using index` | **Covering Index**. Query satisfied entirely from secondary index pages. | Ideal state. No changes required. |
| `Using index condition` | **Index Condition Pushdown (ICP)**. MySQL evaluates index filters inside InnoDB engine before returning rows. | Good. Filters early in the storage engine. |
| `Using where` | MySQL server layer filters rows returned from InnoDB. | Normal, but check if pushdown or indexing is possible. |
| `Using filesort` | An extra sorting pass is required because the index cannot satisfy `ORDER BY`. | **High CPU/Disk impact**. Add composite index on `(filter_col, sort_col)`. |
| `Using temporary` | MySQL must create an internal temporary table (in-memory or disk) for `GROUP BY` or `DISTINCT`. | Optimize index to align grouping with index sort order. |

---

### Eliminating Filesort & Temporary Disk Tables

#### The Filesort Bottleneck
When a query executes `ORDER BY`, MySQL first attempts to read rows in order using an index. If no index matches the sort criteria, it invokes the **filesort** algorithm:
1. Allocates a memory buffer of size `sort_buffer_size`.
2. Reads matching rows into the sort buffer.
3. Sorts rows in RAM.
4. If row size exceeds `sort_buffer_size`, chunks are written to temporary disk files and merged using merge-sort.

#### Optimization Case Study: Eliminating Filesort
```sql
-- Problem: Triggers ALL scan and Using filesort
SELECT id, name, salary 
FROM users 
WHERE department_id = 2 
ORDER BY salary DESC;
```
EXPLAIN before optimization:
```
+----+-------------+-------+------+-------------------+------+---------+------+--------+-----------------------------+
| id | select_type | table | type | possible_keys     | key  | key_len | ref  | rows   | Extra                       |
+----+-------------+-------+------+-------------------+------+---------+------+--------+-----------------------------+
|  1 | SIMPLE      | users | ALL  | NULL              | NULL | NULL    | NULL | 500000 | Using where; Using filesort |
+----+-------------+-------+------+-------------------+------+---------+------+--------+-----------------------------+
```

Create optimal composite index matching equality filter + sort order:
```sql
CREATE INDEX idx_dept_salary ON users (department_id, salary DESC);
```

EXPLAIN after optimization:
```
+----+-------------+-------+------+------------------+------------------+---------+-------+------+-----------------------+
| id | select_type | table | type | possible_keys    | key              | key_len | ref   | rows | Extra                 |
+----+-------------+-------+------+------------------+------------------+---------+-------+------+-----------------------+
|  1 | SIMPLE      | users | ref  | idx_dept_salary  | idx_dept_salary  | 4       | const | 1250 | Using index condition |
+----+-------------+-------+------+------------------+------------------+---------+-------+------+-----------------------+
```
Latency drops from **420ms to 1.8ms** (99.5% reduction).

---

### Optimizer Hints & Plan Directives

MySQL 8 features fine-grained SQL statement hints that override optimizer decisions without altering server-wide variables:

```sql
SELECT 
    /*+ INDEX(u idx_dept_salary) */
    /*+ NO_INDEX(d idx_dept_code) */
    /*+ JOIN_ORDER(u, d) */
    /*+ SET_VAR(sort_buffer_size = 16M) */
    /*+ MAX_EXECUTION_TIME(2000) */
    u.id, u.name, d.name
FROM users u
JOIN departments d ON u.department_id = d.id
WHERE u.department_id = 1;
```

---

## 5. Stage 5: Schema Design, Partitioning & Enterprise Replication

### Schema Design, Normalization & Partitioning

### 1NF Through BCNF & Strategic Denormalization

1. **1NF (First Normal Form)**: Atomic column values. No repeating groups or comma-separated arrays.
2. **2NF (Second Normal Form)**: Must be in 1NF and have no partial dependencies on composite candidate keys.
3. **3NF (Third Normal Form)**: Must be in 2NF and have no transitive functional dependencies (non-key column depending on another non-key column).
4. **BCNF (Boyce-Codd Normal Form)**: Every determinant must be a candidate key.
5. **Strategic Denormalization**: In ultra-high-throughput OLTP systems, selectively duplicating computed or immutable parent columns (e.g. `customer_name` directly in `orders`) eliminates expensive multi-table joins at read time.

---

### High-Performance Data Types & Temporal Storage

- **Primary Keys**: Prefer `BIGINT UNSIGNED AUTO_INCREMENT` (8 bytes) over random UUID strings. If UUIDs are mandated, use MySQL 8's `UUID_TO_BIN(UUID(), 1)` to generate ordered, time-based binary UUIDs (16 bytes) that prevent severe B+Tree leaf fragmentation.
- **Monetary Values**: Never use `FLOAT` or `DOUBLE` due to IEEE-754 floating-point inaccuracies. Always use `DECIMAL(18, 4)`.
- **Date & Time**:
  - `TIMESTAMP` (4 bytes): Stores UTC integer (range 1970 to 2038). Converts automatically between server and client session timezone.
  - `DATETIME` (5 bytes): Stores year-to-microsecond literal value (range 1000 to 9999). Zero timezone conversion overhead.

---

### Horizontal Table Partitioning (Range, List, Hash, Key)

Partitioning splits a massive table into smaller physical segments while presenting a single unified logical table to application queries:

```sql
CREATE TABLE audit_events (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    event_type VARCHAR(50) NOT NULL,
    payload JSON NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id, created_at) -- Partition key MUST be part of every unique key
)
PARTITION BY RANGE (YEAR(created_at)) (
    PARTITION p2024 VALUES LESS THAN (2025),
    PARTITION p2025 VALUES LESS THAN (2026),
    PARTITION p2026 VALUES LESS THAN (2027),
    PARTITION pmax VALUES LESS THAN MAXVALUE
);
```

#### Partition Pruning
The optimizer reads ONLY partitions relevant to the query condition:
```sql
EXPLAIN SELECT * FROM audit_events WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01';
-- partitions: p2026 (All other partitions are skipped from disk I/O)
```

---

### Zero-Downtime Online DDL vs gh-ost/pt-osc

MySQL 8 supports non-blocking Online DDL for many operations:
```sql
ALTER TABLE users 
    ADD COLUMN middle_name VARCHAR(50) NULL,
    ALGORITHM=INPLACE, 
    LOCK=NONE;
```
For complex operations that take table-level exclusive locks (e.g. changing column types), enterprise deployments employ triggerless asynchronous migrators like GitHub's **`gh-ost`** or Percona's **`pt-online-schema-change`** to stream changes via binary logs.

---

### Replication, High Availability & Disaster Recovery

### Replication Topologies: Async, Semi-Sync, Group Replication

```
1. Asynchronous Replication (Default):
   Primary commits locally -> Writes to Binlog -> Replica I/O thread fetches.
   * Risk: Primary failure before replica receives binlog = Data Loss.

2. Semi-Synchronous Replication (rpl_semi_sync):
   Primary commits transaction locally -> Sends to Replica -> Waits for at least
   ONE replica to acknowledge receipt into Relay Log -> Primary returns success to client.
   * Guarantee: Zero commit loss if primary fails.

3. MySQL Group Replication / InnoDB Cluster:
   Built on Paxos-based consensus. Provides Multi-Master or Single-Master with
   automated failover, conflict detection, and distributed membership management.
```

---

### Binary Log Formats & GTID Auto-Positioning

- **ROW Format** (`binlog_format = ROW`): Logs actual byte changes to affected rows. Essential for strict consistency, CDC pipelines (Debezium/Kafka), and modern replication.
- **Global Transaction Identifiers (GTID)**:
  - Every transaction is assigned a globally unique identifier: `UUID:TRANSACTION_ID` (e.g. `3E11FA47-71CA-11E1-9E33-C80AA9429562:1-150`).
  - Simplifies replica failover: Replicas automatically find the exact transaction offset on a new primary without manually specifying binlog coordinates (`MASTER_LOG_POS`).

---

### Physical vs Logical Backups (Percona XtraBackup vs mysqldump)

| Feature | Logical (`mysqldump` / `mydumper`) | Physical (Percona XtraBackup) |
| :--- | :--- | :--- |
| **Mechanism** | Emits SQL statements (`CREATE TABLE`, `INSERT INTO`). | Copies raw InnoDB `.ibd` data pages directly from disk. |
| **Locking Impact** | Requires metadata locks; high buffer pool eviction. | Non-blocking hot backup; zero lock impact on reads/writes. |
| **Backup Speed** | Slow (CPU bound by SQL parsing/serialization). | Blazing (Limited only by disk and network throughput). |
| **Restore Speed** | Multi-hour SQL re-execution on large DBs. | Near-instantaneous: copy files into datadir and apply redo logs. |

---

### Point-in-Time Recovery (PITR) Execution

Restoring a database to an exact microsecond prior to an accidental `DROP TABLE`:
1. Restore the most recent full physical backup (e.g., from yesterday at 02:00 UTC).
2. Locate binary log files generated between the backup timestamp and the disaster.
3. Replay binary logs, stopping immediately before the catastrophic transaction:
```bash
mysqlbinlog --read-from-remote-server \
            --host=mysql-primary.internal \
            --start-datetime="2026-09-05 02:00:00" \
            --stop-datetime="2026-09-05 08:30:15" \
            --skip-gtids \
            binlog.000100 binlog.000101 | mysql -u root -p
```

---

### Enterprise Node.js / TypeScript Integration (`mysql2`)

### High-Throughput Connection Pooling Architecture

```typescript
import mysql from 'mysql2/promise';

// Enterprise pool configuration with health checks
export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
  user: process.env.MYSQL_USER || 'app_user',
  password: process.env.MYSQL_PASSWORD || 'secret',
  database: process.env.MYSQL_DATABASE || 'enterprise_db',
  waitForConnections: true,
  connectionLimit: 50,       // Formula: (Core Count * 2) + Disk Count
  queueLimit: 1000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  namedPlaceholders: true,
  decimalNumbers: true,      // Avoid converting DECIMAL to strings
  supportBigNumbers: true,   // Prevent 64-bit integer overflow in JS
  bigNumberStrings: false,
  timezone: '+00:00'         // Strict UTC enforcement
});
```

### Transaction Manager with Automatic Deadlock Retries

```typescript
import { PoolConnection } from 'mysql2/promise';

export async function runTransaction<T>(
  pool: mysql.Pool,
  callback: (connection: PoolConnection) => Promise<T>,
  maxRetries = 3
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (err: any) {
      await connection.rollback();
      // MySQL Error 1213: ER_LOCK_DEADLOCK
      if (err.errno === 1213 && attempt < maxRetries) {
        const jitter = Math.random() * 50 * Math.pow(2, attempt);
        await new Promise(r => setTimeout(r, jitter));
        continue;
      }
      throw err;
    } finally {
      connection.release();
    }
  }
  throw new Error('Transaction exceeded max retry limit due to contention');
}
```

---

### Security, Performance Schema & Observability

### Role-Based Access Control (RBAC) & TLS 1.3
```sql
-- Create read-only analytics role
CREATE ROLE 'analytics_reader';
GRANT SELECT ON enterprise_db.* TO 'analytics_reader';

-- Create app user and assign role
CREATE USER 'bi_service'@'%' IDENTIFIED BY 'SuperSecureKey123!' REQUIRE SSL;
GRANT 'analytics_reader' TO 'bi_service'@'%';
SET DEFAULT ROLE 'analytics_reader' TO 'bi_service'@'%';
```

### Performance Schema & sys Schema Diagnostics
The `sys` schema provides pre-packaged diagnostic views on top of `performance_schema`:
```sql
-- Find queries performing full table scans
SELECT query, exec_count, total_latency, no_index_used_count 
FROM sys.statements_with_full_table_scans 
ORDER BY total_latency DESC LIMIT 10;

-- Identify unused indexes consuming disk and write I/O
SELECT object_schema, object_name, index_name 
FROM sys.schema_unused_indexes;

-- Check buffer pool allocation by table
SELECT object_schema, object_name, allocated, data 
FROM sys.innodb_buffer_stats_by_table 
ORDER BY allocated DESC LIMIT 10;
```

---

## 6. Stage 6: Staff & Principal MySQL Interview Masterclass (25 Q&A)

### 40 Senior & Staff MySQL Interview Questions

<details>
<summary><strong>1. Explain how InnoDB's Buffer Pool uses the midpoint insertion strategy to avoid cache thrashing.</strong></summary>
Standard LRU immediately places any newly read page at the head of the list. During sequential table scans (e.g. <code>mysqldump</code> or batch reports), massive amounts of cold data would flush out hot, frequently accessed working sets. InnoDB solves this by dividing the LRU list into Young (5/8) and Old (3/8) sublists. New pages enter at the midpoint (head of the Old sublist). A page is only promoted to the Young sublist if it is accessed again after a delay defined by <code>innodb_old_blocks_time</code> (default 1000ms), ensuring single-pass scan pages quickly age out without evicting warm application data.
</details>

<details>
<summary><strong>2. What is the fundamental purpose of the Doublewrite Buffer, and why can't Redo Logs recover torn pages on their own?</strong></summary>
Filesystem page writes are 4KB, whereas InnoDB pages are 16KB. A power cut during a page write can result in a torn page (partial write), which corrupts page headers and checksums. Redo logs contain physical-to-logical deltas, not full page images; they require an intact, parseable page structure to apply changes. The Doublewrite Buffer writes the entire 16KB page to a contiguous disk area first. During crash recovery, if a torn page is detected in an <code>.ibd</code> file, InnoDB restores the intact 16KB page from the Doublewrite Buffer before applying redo log deltas.
</details>

<details>
<summary><strong>3. Contrast REPEATABLE READ in MySQL InnoDB versus the ANSI SQL standard definition.</strong></summary>
Under the ANSI SQL standard, REPEATABLE READ prevents Dirty Reads and Non-Repeatable Reads, but permits Phantom Reads. In MySQL InnoDB, REPEATABLE READ eliminates Phantom Reads for both non-locking reads (using MVCC Read Views established at the transaction's first SELECT) and locking reads/updates (using Next-Key Locking to lock gaps between index records).
</details>

<details>
<summary><strong>4. How does Multi-Version Concurrency Control (MVCC) operate internally in InnoDB?</strong></summary>
Every row in an InnoDB table contains two hidden system columns: <code>DB_TRX_ID</code> (identifies the transaction that inserted or last modified the row) and <code>DB_ROLL_PTR</code> (points to the Undo Log record containing the prior row state). When a transaction starts a Read View, it captures an array of active uncommitted transaction IDs, the minimum active transaction ID (<code>up_limit_id</code>), and the next transaction ID to be assigned (<code>low_limit_id</code>). When reading a row, InnoDB traverses the undo log pointer chain backwards until it reaches a row version with a <code>DB_TRX_ID</code> that is visible according to the Read View snapshot.
</details>

<details>
<summary><strong>5. Explain the Leftmost Prefix Rule and why <code>WHERE b = 2 AND c = 3</code> cannot use index <code>(a, b, c)</code>.</strong></summary>
A composite B+Tree index sorts entries lexicographically: first by <code>a</code>, then by <code>b</code> within identical <code>a</code> values, and by <code>c</code> within identical <code>(a, b)</code> pairs. If column <code>a</code> is omitted from the predicate, the values of <code>b</code> and <code>c</code> are scattered across the entire index tree without sequential ordering, making a B+Tree search seek impossible and forcing a full scan.
</details>

<details>
<summary><strong>6. What is Index Condition Pushdown (ICP) and what performance benefit does it provide?</strong></summary>
In legacy MySQL, the storage engine used index keys only to seek the starting position, then returned full rows to the server layer to evaluate remaining WHERE conditions. With ICP enabled (<code>Using index condition</code>), the storage engine evaluates index-applicable filter conditions inside InnoDB before reading the full row from the clustered index, dramatically cutting storage engine-to-server data transfers and disk I/O.
</details>

<details>
<summary><strong>7. Why is random UUIDv4 considered an anti-pattern for InnoDB Primary Keys?</strong></summary>
InnoDB tables are clustered on the primary key. Sequential keys (like auto-increment integers or sequential UUIDs) insert new records at the end of the rightmost B+Tree leaf page. Random UUIDs insert uniformly across random leaf pages, causing frequent B+Tree page splits, 50% page fill fragmentation, excessive disk I/O, and severe buffer pool churn.
</details>

<details>
<summary><strong>8. What is a Next-Key Lock and how does it prevent phantom reads?</strong></summary>
A Next-Key lock is the combination of a Record Lock on an index record and a Gap Lock on the gap preceding that index record: <code>(previous_record, current_record]</code>. By locking the preceding gap, it prevents any concurrent transaction from inserting new records that would match the query range, thereby preventing phantoms.
</details>

<details>
<summary><strong>9. How does InnoDB detect deadlocks and how does it pick the victim transaction?</strong></summary>
InnoDB maintains a wait-for graph of transactions holding and requesting locks. When a lock cannot be acquired immediately, the deadlock detector (<code>innodb_deadlock_detect</code>) runs a depth-first search on the wait-for graph to find cycles. Upon finding a cycle, it chooses the transaction that has generated the smallest volume of undo logs (the transaction that made the fewest modifications) to minimize rollback overhead.
</details>

<details>
<summary><strong>10. Describe the difference between <code>EXPLAIN</code> and <code>EXPLAIN ANALYZE</code> in MySQL 8.</strong></summary>
<code>EXPLAIN</code> generates an estimate based on optimizer statistics without executing the query. <code>EXPLAIN ANALYZE</code> (introduced in MySQL 8.0.18) actually executes the query using the iterator execution engine, measuring precise node timings, loop counts, and actual row counts produced at each stage of the physical execution tree.
</details>

<details>
<summary><strong>11. What is the difference between <code>type: index</code> and <code>type: ALL</code> in an EXPLAIN plan?</strong></summary>
<code>ALL</code> is a Full Table Scan, reading every data page from the Clustered Index. <code>index</code> is a Full Index Scan, scanning the entire B+Tree of a secondary index. Because secondary indexes are usually much smaller than clustered index tables, <code>index</code> is faster than <code>ALL</code>, but both indicate that no targeted index seek occurred.
</details>

<details>
<summary><strong>12. What does <code>Using filesort</code> mean and how do you eliminate it?</strong></summary>
<code>Using filesort</code> indicates that the optimizer could not use an index to satisfy the <code>ORDER BY</code> clause, and had to read rows into a <code>sort_buffer</code> to sort them in memory or merge-sort them to disk. It is eliminated by creating a composite index that covers the filtering columns first, followed by the sorting columns in matching order.
</details>

<details>
<summary><strong>13. How does Semi-Synchronous Replication differ from standard Asynchronous Replication?</strong></summary>
In Asynchronous replication, the primary commits transactions and writes to the binlog without waiting for replica confirmation. In Semi-Synchronous replication, the primary commits locally, transmits the binlog event to replicas, and blocks until at least one replica confirms that the event has been written to its relay log, preventing data loss on primary crash.
</details>

<details>
<summary><strong>14. Explain Global Transaction Identifiers (GTID) and why they simplify failover.</strong></summary>
A GTID is a unique identifier assigned to every committed transaction across a replication topology (formatted as <code>UUID:TXN_ID</code>). Without GTID, failing over to a replica requires manually matching binary log filenames and byte offsets. With GTID, the replica connects to a new primary with <code>MASTER_AUTO_POSITION = 1</code>, and the new primary automatically sends all missing transactions.
</details>

<details>
<summary><strong>15. What are the trade-offs between <code>innodb_flush_log_at_trx_commit = 1, 0, and 2</code>?</strong></summary>
Value <code>1</code> (ACID) flushes the redo log buffer to disk on every commit via <code>fsync</code>, guaranteeing zero data loss at the cost of higher disk I/O. Value <code>0</code> writes and flushes the log once per second; a crash can lose up to 1 second of transactions. Value <code>2</code> writes to the OS page cache on each commit and flushes to disk once per second; transactions survive a MySQL crash, but not an OS kernel crash or power loss.
</details>

<details>
<summary><strong>16. What is a Covering Index and why does it drastically reduce query latency?</strong></summary>
A covering index contains all columns requested by a query in its leaf pages. When satisfied by a covering index, MySQL never has to perform a secondary-to-clustered index bookmark lookup, saving memory lookups and random disk reads. It is indicated in EXPLAIN by <code>Using index</code> in the <code>Extra</code> column.
</details>

<details>
<summary><strong>17. What is the difference between <code>DENSE_RANK()</code> and <code>RANK()</code> window functions?</strong></summary>
Both rank rows according to an order expression. When identical values occur: <code>RANK()</code> leaves gaps in the sequence (e.g. 1, 2, 2, 4), whereas <code>DENSE_RANK()</code> continues sequentially without gaps (e.g. 1, 2, 2, 3).
</details>

<details>
<summary><strong>18. How do Recursive CTEs work and how does MySQL prevent infinite recursion?</strong></summary>
A recursive CTE contains an anchor query, followed by <code>UNION ALL</code>, followed by a recursive query that references the CTE name. It terminates when the recursive query yields an empty set. MySQL prevents infinite loops using the session variable <code>cte_max_recursion_depth</code> (default 1000).
</details>

<details>
<summary><strong>19. What is Hash Join in MySQL 8 and when is it selected over Nested Loop Join?</strong></summary>
Introduced in MySQL 8.0.18, Hash Join builds an in-memory hash table on the join key of the smaller table and probes it with rows from the larger table. The optimizer selects Hash Join for equi-joins where neither table has an applicable index on the join columns.
</details>

<details>
<summary><strong>20. Explain the difference between <code>VARCHAR(255)</code> and <code>TEXT</code> in InnoDB.</strong></summary>
<code>VARCHAR</code> columns are stored inline within the 16KB InnoDB page unless their size forces off-page storage. <code>TEXT</code> columns are usually stored off-page in overflow pages, with only a 20-byte pointer in the main row page. Furthermore, temporary tables involving <code>TEXT</code> columns often cannot use the in-memory Memory storage engine, forcing disk tables.
</details>

<details>
<summary><strong>21. What is an Invisible Index and what problem does it solve in production?</strong></summary>
An invisible index is maintained by write operations but ignored by the optimizer during query planning. It allows DBAs to safely test the performance impact of removing an index before permanently dropping it, avoiding expensive index rebuilds if a query unexpectedly degrades.
</details>

<details>
<summary><strong>22. What are Generated (Virtual vs Stored) Columns and how are they indexed?</strong></summary>
Virtual columns are evaluated on-the-fly when read and take no storage space on disk. Stored columns are evaluated when the row is written and stored persistently. InnoDB supports creating B+Tree secondary indexes on Virtual columns, which materializes the index keys in the secondary index without duplicating the column in the clustered table.
</details>

<details>
<summary><strong>23. What are the limitations of Table Partitioning in MySQL?</strong></summary>
Every unique or primary key on a partitioned table must include every column used in the table's partitioning expression. Foreign keys are also not supported on partitioned tables in InnoDB.
</details>

<details>
<summary><strong>24. Explain the difference between Statement-Based (SBR) and Row-Based (RBR) binary logging.</strong></summary>
SBR logs the exact SQL statements executed. It is compact, but causes data drift if non-deterministic functions (e.g. <code>NOW()</code>, <code>UUID()</code>, <code>LIMIT</code> without <code>ORDER BY</code>) are replicated. RBR logs the before-and-after binary row images, ensuring identical state across replicas at the expense of larger binlog file size.
</details>

<details>
<summary><strong>25. What is the difference between Optimistic and Pessimistic locking in MySQL applications?</strong></summary>
Pessimistic locking uses database locks (<code>SELECT ... FOR UPDATE</code>) to block concurrent writers until the transaction finishes. Optimistic locking does not acquire database locks; it tracks a version number or timestamp column and executes <code>UPDATE ... WHERE id = :id AND version = :current_version</code>, verifying that no other transaction modified the row in the interim.
</details>

<details>
<summary><strong>26. How do you size <code>innodb_buffer_pool_size</code> on a dedicated database server?</strong></summary>
Generally between 70% and 80% of total physical RAM. Sizing must leave enough RAM for the operating system kernel, MySQL thread stacks (<code>max_connections * thread_stack</code>), connection buffers (join buffer, sort buffer), and OS file caching.
</details>

<details>
<summary><strong>27. What causes Metadata Lock (MDL) queues and how do they impact production?</strong></summary>
Any DDL operation (e.g. <code>ALTER TABLE</code>) requires an exclusive Metadata Lock. If a long-running <code>SELECT</code> is executing, the DDL blocks waiting for the MDL. Subsequent incoming <code>SELECT</code> queries then queue up behind the DDL's lock request, rapidly exhausting <code>max_connections</code> and causing a connection pool outage.
</details>

<details>
<summary><strong>28. What is the Adaptive Hash Index (AHI) in InnoDB?</strong></summary>
InnoDB automatically monitors index searches. If it notices that certain index pages are repeatedly searched via B+Tree traversal, it constructs an in-memory hash table on those keys, turning O(log N) B+Tree searches into O(1) hash lookups.
</details>

<details>
<summary><strong>29. What is the Change Buffer in InnoDB and when does it take effect?</strong></summary>
The Change Buffer caches modifications (insert, update, delete) to secondary index pages that are not in the Buffer Pool, avoiding expensive random disk I/O. When the page is subsequently read into memory by another query, the buffered changes are merged.
</details>

<details>
<summary><strong>30. What is <code>innodb_autoinc_lock_mode = 2</code> (Interleaved) and why is it default in MySQL 8?</strong></summary>
Mode 2 does not acquire table-level auto-increment locks during multi-row inserts; it allocates IDs concurrently. It significantly improves insert throughput and concurrency, and is completely safe when using Row-Based Replication (RBR).
</details>

<details>
<summary><strong>31. Explain the difference between <code>JSON_EXTRACT</code> (<code>-></code>) and the inline unquoting path operator (<code>->></code>).</strong></summary>
<code>-></code> extracts the JSON element preserving JSON quotes for strings (e.g. <code>"London"</code>). <code>->></code> extracts the value and unquotes it, returning a plain SQL string (e.g. <code>London</code>), equivalent to <code>JSON_UNQUOTE(JSON_EXTRACT(...))</code>.
</details>

<details>
<summary><strong>32. What is <code>JSON_TABLE</code> in MySQL 8?</strong></summary>
A table function that transforms JSON data into a relational tabular format within a query, allowing developers to query nested JSON arrays using standard SQL joins, aggregations, and window functions.
</details>

<details>
<summary><strong>33. What is the purpose of the <code>sys</code> schema?</strong></summary>
A collection of user-friendly views, stored procedures, and functions built on top of <code>performance_schema</code> and <code>information_schema</code>, enabling easy monitoring of memory consumption, lock contention, slow queries, and unused indexes.
</details>

<details>
<summary><strong>34. How does MySQL handle <code>NULL</code> values in unique indexes?</strong></summary>
In SQL standards and MySQL InnoDB, multiple <code>NULL</code> values are permitted in a <code>UNIQUE</code> index column because <code>NULL != NULL</code>. To enforce strict uniqueness including nulls, use a default placeholder or a functional index.
</details>

<details>
<summary><strong>35. What is the difference between <code>TRUNCATE TABLE</code> and <code>DELETE FROM table</code>?</strong></summary>
<code>DELETE</code> deletes rows one by one, generating undo logs and triggering row-level foreign key cascading or triggers. <code>TRUNCATE</code> drops and recreates the underlying data file (or recreates the clustered index), executing as a DDL with minimal logging and resetting the auto-increment counter.
</details>

<details>
<summary><strong>36. Why should you avoid <code>SELECT *</code> in production queries?</strong></summary>
It prevents covering index optimizations (forcing bookmark lookups to the clustered index), increases network bandwidth and serialization overhead, wastes buffer pool cache space, and breaks application contracts when schema migrations add large columns.
</details>

<details>
<summary><strong>37. What is Point-in-Time Recovery (PITR) and what files are required to perform it?</strong></summary>
PITR restores a database to a specific second or transaction. It requires a full baseline backup (physical or logical) along with all continuous binary logs generated between the backup time and the target recovery time.
</details>

<details>
<summary><strong>38. What is the difference between <code>TIMESTAMP</code> and <code>DATETIME</code> in MySQL?</strong></summary>
<code>TIMESTAMP</code> is 4 bytes, ranges from 1970 to 2038, and automatically converts values to and from UTC based on the current session timezone. <code>DATETIME</code> is 5 bytes, ranges from 1000 to 9999, and stores the literal date/time value without timezone conversions.
</details>

<details>
<summary><strong>39. How does <code>gh-ost</code> perform zero-downtime schema changes without database triggers?</strong></summary>
Unlike <code>pt-online-schema-change</code> which uses triggers (introducing write overhead and lock contention), <code>gh-ost</code> creates a shadow table, copies existing rows in batches, and reads the primary's binary log (acting as a replica) to asynchronously replay ongoing writes onto the shadow table before an atomic cut-over rename.
</details>

<details>
<summary><strong>40. What is Group Replication and what consensus algorithm does it use?</strong></summary>
Group Replication is a high-availability solution providing multi-master update-everywhere or single-master automated failover. It uses a Paxos-based group communication protocol (Menzies) to ensure that all members agree on transaction order and conflict detection across the cluster.
</details>

---

## 7. Stage 7: Interactive Platform, Simulator & REST API Reference

### Production Cheat Sheet & Operational Runbook

### Key Administrative Commands
```sql
-- Check real-time engine internals, lock waits, and buffer pool status
SHOW ENGINE INNODB STATUS\G

-- Check active client queries and thread states
SHOW FULL PROCESSLIST;

-- Check buffer pool hit rate (should be > 99%)
SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';

-- Check total current deadlocks detected since boot
SHOW GLOBAL STATUS LIKE 'Innodb_deadlocks';
```

### Essential Configuration (`my.cnf`) Template
```ini
[mysqld]
# Storage Engine & Character Set
default_storage_engine          = InnoDB
character_set_server            = utf8mb4
collation_server                = utf8mb4_0900_ai_ci

# Memory & Buffer Pool (Example for 32GB RAM Dedicated Host)
innodb_buffer_pool_size         = 24G
innodb_buffer_pool_instances   = 8
innodb_log_buffer_size          = 64M

# Redo Log & Durability
innodb_flush_log_at_trx_commit = 1
innodb_redo_log_capacity        = 4G
innodb_flush_method             = O_DIRECT

# Connection & Concurrency
max_connections                 = 500
thread_cache_size               = 64
innodb_thread_concurrency       = 0

# Binary Logging & Replication
server_id                       = 101
log_bin                         = /var/log/mysql/mysql-bin.log
binlog_format                   = ROW
binlog_expire_logs_seconds      = 604800
gtid_mode                       = ON
enforce_gtid_consistency        = ON

# Slow Query Logging
slow_query_log                  = 1
slow_query_log_file             = /var/log/mysql/slow.log
long_query_time                 = 1.0
log_queries_not_using_indexes   = 0
```

---

## Quickstart & Interactive Testing

### Prerequisites
- Node.js 20.x or 22.x LTS
- (Optional) Local MySQL 8.x instance (defaults to seamless in-memory fallback for testing)

### Installation & Execution
```bash
# Clone the repository
git clone https://github.com/manthanank/learn-mysql.git
cd learn-mysql

# Install dependencies
npm install

# Run Vitest test suite (16 comprehensive tests)
npm test

# Build TypeScript output
npm run build

# Start production server
npm start
# Server listening on http://localhost:3000
```

---

## Contributing & Community

Contributions are welcomed! Please review [CONTRIBUTING.md](CONTRIBUTING.md) and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.