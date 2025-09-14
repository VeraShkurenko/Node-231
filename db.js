//Робота з базами даних
// -------SELECT *-------->
// JS <---Driver(Connector)--> DBMS
// <--------Data--------
// встановлюємо додатковий пакет (бібліотеку)
// npm i mysql2
// *якщо це перший модуль що додається то слід додати запис "type": "module" в package.json
import * as mysql2 from 'mysql2';

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

// const dbPool = mysql2.createPool(connectionData).promise();

// await dbPool.query("SHOW DATABASES")
// .then(([data, fieldList]) => {
//     console.log(data);
//     console.log(fieldList);
// })
// .catch( console.error);

// await dbPool.query("SELECT CURRENT_TIMESTAMP")
// .then(([data, fieldList]) => {
//     console.log(data);
//     console.log(fieldList);
// })
// .catch( console.error);

// dbPool.end();



// Механізм parent_id - зазначення звязку з цією ж таблицею, тільки з іншим записом.
// [product_groups]
// [id]
// [parent_id]


