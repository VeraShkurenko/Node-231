//Робота з базами даних
// -------SELECT *-------->
// JS <---Driver(Connector)--> DBMS
// <--------Data--------
// встановлюємо додатковий пакет (бібліотеку)
// npm i mysql2
// *якщо це перший модуль що додається то слід додати запис "type": "module" в package.json
import * as mysql2 from 'mysql2';
import GroupDao from "./dao/groupDao.js";

// задаємо дані для підключення 
const connectionData = {
    host: 'localhost',
    port: 3306,
    user: 'user_231',
    password: 'pass_231',
    database: 'node_231',
    charset: 'utf8mb4'
};

// Connection pool - набір встановленних підключеннь,
// які можуть повторно використовуватись
const dbPool = mysql2.createPool(connectionData).promise();
const groupDao = new GroupDao(dbPool);
await groupDao.install();
await groupDao.seed().then(()=>console.log('Seed finished'));
dbPool.end();
// try {
//     // створюємо таблицю
//     await dbPool.query(`
//         CREATE TABLE IF NOT EXISTS random_items (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             int_val INT,
//             float_val FLOAT,
//             str_val VARCHAR(50)
//         )
//     `);

//     // очищаємо перед вставкою
//     await dbPool.query("TRUNCATE TABLE random_items");

//     // функції для випадкових значень
//     function getRandomInt() {
//         return Math.floor(Math.random() * 100);
//     }

//     function getRandomFloat() {
//         return (Math.random() * 100).toFixed(2);
//     }

//     function getRandomString(length = 5) {
//         const chars = "abcdefghijklmnopqrstuvwxyz";
//         let str = "";
//         for (let i = 0; i < length; i++) {
//             str += chars.charAt(Math.floor(Math.random() * chars.length));
//         }
//         return str;
//     }

//     // вставляємо кілька записів
//     for (let i = 0; i < 5; i++) {
//         await dbPool.query(
//             "INSERT INTO random_items (int_val, float_val, str_val) VALUES (?, ?, ?)",
//             [getRandomInt(), getRandomFloat(), getRandomString()]
//         );
//     }

//     // виводимо таблицю
//     const [rows] = await dbPool.query("SELECT * FROM random_items");
//     console.log("Вміст таблиці random_items:");
//     console.log(rows);

// } catch (err) {
//     console.error(err);
// } finally {
//     await dbPool.end(); // закриваємо пул тільки після ВСІХ запитів
// }

// // Механізм parent_id - зазначення звязку з цією ж таблицею, тільки з іншим записом.
// // [product_groups]
// // [id]
// // [parent_id]
