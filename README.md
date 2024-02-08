# Learn MySQL

Here's a basic MySQL cheat sheet covering some common commands and syntax:

### Basic Commands:

1. **Connect to MySQL:**
   ```sql
   mysql -u username -p
   ```

2. **Show Databases:**
   ```sql
   SHOW DATABASES;
   ```

3. **Use a Database:**
   ```sql
   USE database_name;
   ```

4. **Show Tables:**
   ```sql
   SHOW TABLES;
   ```

5. **Show Table Structure:**
   ```sql
   DESCRIBE table_name;
   ```

6. **Create Database:**
   ```sql
   CREATE DATABASE database_name;
   ```

7. **Create Table:**
   ```sql
   CREATE TABLE table_name (
       column1 datatype,
       column2 datatype,
       ...
   );
   ```

8. **Insert Data:**
   ```sql
   INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
   ```

9. **Select Data:**
   ```sql
   SELECT column1, column2, ... FROM table_name WHERE condition;
   ```

10. **Update Data:**
    ```sql
    UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
    ```

11. **Delete Data:**
    ```sql
    DELETE FROM table_name WHERE condition;
    ```

12. **Drop Table:**
    ```sql
    DROP TABLE table_name;
    ```

13. **Drop Database:**
    ```sql
    DROP DATABASE database_name;
    ```

### Advanced Commands:

1. **Joins:**
   ```sql
   SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;
   ```

2. **Group By:**
   ```sql
   SELECT column1, COUNT(*) FROM table_name GROUP BY column1;
   ```

3. **Order By:**
   ```sql
   SELECT * FROM table_name ORDER BY column_name;
   ```

4. **Aliases:**
   ```sql
   SELECT column_name AS alias_name FROM table_name;
   ```

5. **Aggregate Functions:**
   ```sql
   SELECT COUNT(column_name) FROM table_name;
   ```

6. **Subqueries:**
   ```sql
   SELECT column_name FROM table_name WHERE column_name IN (SELECT column_name FROM another_table);
   ```

7. **Views:**
   ```sql
   CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;
   ```

Remember to replace placeholders like `username`, `database_name`, `table_name`, etc., with your actual values. This cheat sheet should help you get started with basic MySQL commands and operations.
