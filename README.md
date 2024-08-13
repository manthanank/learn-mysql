# Learn MySQL

This repository helps you learn MySQL, a popular open-source database management system. Master MySQL and build powerful applications.

## What is MySQL?

MySQL is an open-source RDBMS that uses SQL for data management. It's popular for its speed, reliability, and ease of use in web applications.

## Why Learn MySQL?

Learning MySQL is crucial for database management and web development. Key reasons include:

1. **Popularity:** Widely used by developers and organizations.
2. **Open Source:** Free to use and contribute to.
3. **Compatibility:** Works with various OS and languages.
4. **Performance:** Fast and reliable.
5. **Scalability:** Handles large data and scales well.
6. **Community Support:** Strong developer community.

## How to Learn MySQL?

1. **Basics:** Learn database concepts, SQL, and MySQL.
2. **Practice:** Regularly write SQL queries.
3. **Advanced Topics:** Study joins, subqueries, transactions, etc.
4. **Projects:** Build real-world projects.
5. **Documentation:** Read official MySQL docs.
6. **Communities:** Join forums and groups.
7. **Courses:** Take online courses and tutorials.
8. **Stay Updated:** Follow latest trends and updates.

## Resources to Learn MySQL

Here are some resources to help you learn MySQL:

1. **Official MySQL Documentation:** The [official MySQL documentation](https://dev.mysql.com/doc/) provides comprehensive information on MySQL features, functions, and best practices.

2. **MySQL Tutorial:** The [MySQL Tutorial](https://dev.mysql.com/doc/mysql-tutorial/en/) on the MySQL website offers a step-by-step guide to learning MySQL from the basics to advanced topics.

3. **W3Schools MySQL Tutorial:** The [W3Schools MySQL Tutorial](https://www.w3schools.com/sql/) provides interactive examples and exercises to help you learn SQL and MySQL.

4. **MySQL Workbench:** [MySQL Workbench](https://www.mysql.com/products/workbench/) is a visual database design tool that allows you to create, manage, and visualize MySQL databases.

5. **Online Courses:** Platforms like Coursera, Udemy, and Pluralsight offer online courses on MySQL for beginners and advanced users.

6. **Books:** Books like "MySQL Cookbook" by Paul DuBois and "Learning MySQL" by Seyed M.M. (Saied) Tahaghoghi and Hugh E. Williams are excellent resources for learning MySQL.

7. **YouTube Tutorials:** YouTube channels like Programming with Mosh, freeCodeCamp, and Codecademy offer video tutorials on MySQL for beginners.

8. **Practice Platforms:** Websites like LeetCode, HackerRank, and SQLZoo provide practice problems and challenges to help you improve your SQL and MySQL skills.

By utilizing these resources and actively engaging with MySQL, you can become proficient in working with databases and building robust applications.

## MySQL Cheat Sheet

Here's a comprehensive MySQL cheat sheet covering common commands and syntax:

### Basic Commands

Here are examples for each of the MySQL commands:

1. **Connect to MySQL:**

      ```bash
      mysql -u username -p
      
      mysql -u root -p
      ```

2. **Show Databases:**

      ```sql
      SHOW DATABASES;
      ```

      *Output:*

      ```text
      +--------------------+
      | Database           |
      +--------------------+
      | information_schema |
      | mysql              |
      | performance_schema |
      | mydatabase         |
      +--------------------+
      ```

3. **Use a Database:**

      ```sql
      USE database_name;

      USE mydatabase;
      ```

4. **Show Tables:**

      ```sql
      SHOW TABLES;
      ```

      *Output:*

      ```text
      +------------------+
      | Tables_in_mydatabase |
      +------------------+
      | employees        |
      | departments      |
      +------------------+
      ```

5. **Show Table Structure:**

      ```sql
      DESCRIBE table_name;

      DESCRIBE employees;
      ```

      *Output:*

      ```text
      +------------+-------------+------+-----+---------+----------------+
      | Field      | Type        | Null | Key | Default | Extra          |
      +------------+-------------+------+-----+---------+----------------+
      | id         | int(11)     | NO   | PRI | NULL    | auto_increment |
      | first_name | varchar(50) | NO   |     | NULL    |                |
      | last_name  | varchar(50) | NO   |     | NULL    |                |
      | email      | varchar(100)| NO   | UNI | NULL    |                |
      +------------+-------------+------+-----+---------+----------------+
      ```

6. **Create Database:**

      ```sql
      CREATE DATABASE database_name;
      
      CREATE DATABASE school;
      ```

7. **Create Table:**

      ```sql
      CREATE TABLE table_name (
            column1 datatype,
            column2 datatype,
            ...
      );

      CREATE TABLE students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            enrollment_date DATE
      );
      ```

8. **Insert Data:**

      ```sql
      INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);

      INSERT INTO students (first_name, last_name, enrollment_date)
      VALUES ('John', 'Doe', '2024-08-13');
      ```

9. **Select Data:**

      ```sql
      SELECT column1, column2, ... FROM table_name WHERE condition;

      SELECT first_name, last_name FROM students WHERE enrollment_date = '2024-08-13';
      ```

      *Output:*

      ```text
      +------------+-----------+
      | first_name | last_name |
      +------------+-----------+
      | John       | Doe       |
      +------------+-----------+
      ```

10. **Update Data:**

      ```sql
      UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;

      UPDATE students SET first_name = 'Jane' WHERE id = 1;
      ```

11. **Delete Data:**

      ```sql
      DELETE FROM table_name WHERE condition;

      DELETE FROM students WHERE id = 1;
      ```

12. **Drop Table:**

      ```sql
      DROP TABLE table_name;

      DROP TABLE students;
      ```

13. **Drop Database:**

      ```sql
      DROP DATABASE database_name;
      
      DROP DATABASE school;
      ```

14. **Exit MySQL:**

      ```sql
      EXIT;
      ```

15. **Show Users:**

      ```sql
      SELECT user FROM mysql.user;
      ```

      *Output:*

      ```text
      +------------------+
      | user             |
      +------------------+
      | root             |
      | mysql.infoschema |
      +------------------+
      ```

16. **Create User:**

      ```sql
      CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

      CREATE USER 'student_user'@'localhost' IDENTIFIED BY 'password123';
      ```

17. **Grant Privileges:**

      ```sql
      GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';

      GRANT ALL PRIVILEGES ON school.* TO 'student_user'@'localhost';
      ```

18. **Flush Privileges:**

      ```sql
      FLUSH PRIVILEGES;
      ```

19. **Backup Database:**

      ```bash
      mysqldump -u username -p database_name > backup.sql

      mysqldump -u root -p school > school_backup.sql
      ```

20. **Restore Database:**

      ```bash
      mysql -u username -p database_name < backup.sql

      mysql -u root -p school < school_backup.sql
      ```

21. **Show Grants:**

      ```sql
      SHOW GRANTS FOR 'username'@'localhost';

      SHOW GRANTS FOR 'student_user'@'localhost';
      ```

      *Output:*

      ```text
      +------------------------------------------------------------------------------------------------------------------+
      | Grants for student_user@localhost                                                                                |
      +------------------------------------------------------------------------------------------------------------------+
      | GRANT ALL PRIVILEGES ON `school`.* TO `student_user`@`localhost`                                                 |
      +------------------------------------------------------------------------------------------------------------------+
      ```

22. **Revoke Privileges:**

      ```sql
      REVOKE ALL PRIVILEGES ON database_name.* FROM 'username'@'localhost';

      REVOKE ALL PRIVILEGES ON school.* FROM 'student_user'@'localhost';
      ```

23. **Change Password:**

      ```sql
      SET PASSWORD FOR 'username'@'localhost' = PASSWORD('newpassword');

      SET PASSWORD FOR 'student_user'@'localhost' = PASSWORD('newpassword123');
      ```

24. **Create Index:**

      ```sql
      CREATE INDEX index_name ON table_name (column_name);

      CREATE INDEX idx_last_name ON students (last_name);
      ```

25. **Show Indexes:**

      ```sql
      SHOW INDEX FROM table_name;

      SHOW INDEX FROM students;
      ```

      *Output:*

      ```text
      +----------+------------+----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
      | Table    | Non_unique | Key_name       | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
      +----------+------------+----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
      | students |          1 | idx_last_name  |            1 | last_name   | A         |           1 |     NULL | NULL   | YES  | BTREE      |         |               |
      +----------+------------+----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
      ```

26. **Explain Query:**

      ```sql
      EXPLAIN SELECT column1, column2 FROM table_name WHERE condition;

      EXPLAIN SELECT first_name, last_name FROM students WHERE last_name = 'Doe';
      ```

      *Output:*

      ```text
      +----+-------------+----------+------------+------+---------------+--------------+---------+-------+------+----------+-------+
      | id | select_type | table    | partitions | type | possible_keys | key          | key_len | ref   | rows | filtered | Extra |
      +----+-------------+----------+------------+------+---------------+--------------+---------+-------+------+----------+-------+
      |  1 | SIMPLE      | students | NULL       | ref  | idx_last_name | idx_last_name| 153     | const |    1 |   100.00 | NULL  |
      +----+-------------+----------+------------+------+---------------+--------------+---------+-------+------+----------+-------+
      ```

27. **Show Processlist:**

      ```sql
      SHOW PROCESSLIST;
      ```

      *Output:*

      ```text
      +----+------+-----------+-----------+---------+------+-------+------------------+
      | Id | User | Host      | db        | Command | Time | State | Info             |
      +----+------+-----------+-----------+---------+------+-------+------------------+
      |  5 | root | localhost | mydatabase | Query   |    0 | init  | SHOW PROCESSLIST |
      +----+------+-----------+-----------+---------+------+-------+------------------+
      ```

28. **Kill Process:**

      ```sql
      KILL process_id;

      KILL 5;
      ```

29. **Set Timezone:**

      ```sql
      SET time_zone = timezone;

      SET time_zone = '+00:00';
      ```

30. **Show Variables:**

      ```sql
      SHOW VARIABLES LIKE 'variable_name';

      SHOW VARIABLES LIKE 'time_zone';
      ```

      *Output:*

      ```text
      +---------------+--------+
      | Variable_name | Value  |
      +---------------+--------+
      | time_zone     | +00:00 |
      +---------------+--------+
      ```

31. **Show Status:**

      ```sql
      SHOW STATUS LIKE 'variable_name';

      SHOW STATUS LIKE 'Connections';
      ```

      *Output:*

      ```text
      +---------------+-------+
      | Variable_name | Value |
      +---------------+-------+
      | Connections   | 12    |
      +---------------+-------+
      ```

### Advanced Commands

Here are examples for each of the advanced MySQL commands:

1. **Joins:**

      ```sql
      SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;

      SELECT employees.first_name, employees.last_name, departments.department_name
      FROM employees
      JOIN departments ON employees.department_id = departments.id;
      ```

      *Example Explanation:*
      This query retrieves the first and last names of employees along with their department names by joining the `employees` table with the `departments` table on the `department_id` column.

2. **Group By:**

      ```sql
      SELECT column1, COUNT(*) FROM table_name GROUP BY column1;

      SELECT department_id, COUNT(*) AS employee_count
      FROM employees
      GROUP BY department_id;
      ```

      *Example Explanation:*
      This query counts the number of employees in each department, grouping the results by `department_id`.

3. **Order By:**

      ```sql
      SELECT * FROM table_name ORDER BY column_name;

      SELECT * FROM employees ORDER BY last_name ASC;
      ```

      *Example Explanation:*
      This query retrieves all records from the `employees` table and orders them alphabetically by `last_name` in ascending order.

4. **Aliases:**

      ```sql
      SELECT column_name AS alias_name FROM table_name;

      SELECT first_name AS fname, last_name AS lname FROM employees;
      ```

      *Example Explanation:*
      This query selects the `first_name` and `last_name` columns from the `employees` table, renaming them to `fname` and `lname` respectively in the result set.

5. **Aggregate Functions:**

      ```sql
      SELECT COUNT(column_name) FROM table_name;

      SELECT AVG(salary) AS average_salary FROM employees;
      ```

      *Example Explanation:*
      This query calculates the average salary of all employees using the `AVG` function.

6. **Subqueries:**

      ```sql
      SELECT column_name FROM table_name WHERE column_name IN (SELECT column_name FROM another_table);

      SELECT first_name, last_name FROM employees WHERE department_id IN (SELECT id FROM departments WHERE department_name = 'Sales');
      ```

      *Example Explanation:*
      This query retrieves the names of employees who work in the 'Sales' department by using a subquery to find the corresponding `department_id`.

7. **Views:**

      ```sql
      CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;

      CREATE VIEW employee_sales AS
      SELECT first_name, last_name, department_name
      FROM employees
      JOIN departments ON employees.department_id = departments.id
      WHERE department_name = 'Sales';
      ```

      *Example Explanation:*
      This command creates a view called `employee_sales` that shows the names of employees who work in the 'Sales' department.

8. **Transactions:**

      ```sql
      START TRANSACTION;
      INSERT INTO table_name VALUES (value1, value2, ...);
      COMMIT;

      START TRANSACTION;
      INSERT INTO accounts (account_id, balance) VALUES (1, 1000);
      INSERT INTO accounts (account_id, balance) VALUES (2, 2000);
      COMMIT;
      ```

      *Example Explanation:*
      This set of commands starts a transaction, inserts two records into the `accounts` table, and then commits the transaction to make the changes permanent.

9. **Stored Procedures:**

      ```sql
      DELIMITER //
      CREATE PROCEDURE procedure_name()
      BEGIN
             -- SQL statements
      END //
      DELIMITER ;

      DELIMITER //
      CREATE PROCEDURE AddEmployee(IN first_name VARCHAR(50), IN last_name VARCHAR(50), IN dept_id INT)
      BEGIN
            INSERT INTO employees (first_name, last_name, department_id) VALUES (first_name, last_name, dept_id);
      END //
      DELIMITER ;
      ```

      *Example Explanation:*
      This command creates a stored procedure named `AddEmployee` that inserts a new employee into the `employees` table. The procedure takes three input parameters: `first_name`, `last_name`, and `dept_id`.

10. **Indexes:**

      ```sql
      CREATE INDEX index_name ON table_name (column_name);

      CREATE INDEX idx_department_id ON employees (department_id);
      ```

      *Example Explanation:*
      This command creates an index named `idx_department_id` on the `department_id` column of the `employees` table to speed up queries involving that column.

11. **Foreign Keys:**

      ```sql
      ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES other_table(column_name);

      ALTER TABLE orders
      ADD FOREIGN KEY (customer_id) REFERENCES customers(id);
      ```

      *Example Explanation:*
      This command adds a foreign key constraint to the `orders` table, linking the `customer_id` column in `orders` to the `id` column in the `customers` table, ensuring referential integrity.

12. **Triggers:**

      ```sql
      CREATE TRIGGER trigger_name BEFORE INSERT ON table_name FOR EACH ROW BEGIN
            -- Trigger logic here
      END;

      CREATE TRIGGER update_salary BEFORE UPDATE ON employees
      FOR EACH ROW
      BEGIN
            IF NEW.salary > OLD.salary THEN
            SET NEW.salary = OLD.salary;
            END IF;
      END;
      ```

   *Example Explanation:*
   This command creates a trigger named `update_salary` that is executed before an update on the `employees` table. The trigger prevents the salary from being increased by resetting the new value to the old value if an attempt is made to increase it.

This cheat sheet provides a comprehensive overview of MySQL commands, syntax, and additional advanced topics like foreign keys and triggers.

### Note

Remember to replace placeholders like `username`, `database_name`, `table_name`, etc., with your actual values. This cheat sheet should help you get started with basic MySQL commands and operations.

## Conclusion

MySQL is a powerful and versatile database management system that is essential for anyone working with databases or developing web applications. By learning MySQL, you can build robust applications, manage data efficiently, and enhance your programming skills. Use the resources and cheat sheet provided in this repository to start your journey to mastering MySQL. Happy learning!

## References

- [MySQL Documentation](https://dev.mysql.com/doc/)
- [W3Schools MySQL Tutorial](https://www.w3schools.com/sql/)

## License

This repository is licensed under the [MIT License](LICENSE).

## Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through the GitHub Sponsor. Your support will help me to continue and bring more exciting projects. Thank you!

[![Buy Me A Coffee](/assets/bmc-button.svg)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green)]([https://](https://github.com/sponsors/manthanank))

---

Show your support by 🌟 the repository.

---
