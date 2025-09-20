export default class GroupDao{
   
    constructor(dbPool){
        this.dbPool = dbPool;
    }

     install(){
        const sql = 'CREATE TABLE IF NOT EXISTS \`groups\`(id CHAR(36) PRIMARY KEY, parent_id CHAR(36) NULL, name VARCHAR(64) NOT NULL COLLATE utf8mb4_unicode_ci) ENGINE = InnoDb DEFAULT CHARSET = utf8mb4';
        return this.dbPool.query(sql)
        .then(() => console.log("Table 'groups' created"))
        .catch(console.error);
    }

    seed(){
        let tasks = [];
        let sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('9602de6c-9206-11f0-9982-9cd34d08412e', NULL, 'Побутова техніка')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

         sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('e8b39182-9207-11f0-9982-9cd34d08412e', '9602de6c-9206-11f0-9982-9cd34d08412e', 'Для ванни')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('31ee788a-9208-11f0-9982-9cd34d08412e', 'e8b39182-9207-11f0-9982-9cd34d08412e', 'Пральні машини')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('a6e84238-9208-11f0-9982-9cd34d08412e', 'e8b39182-9207-11f0-9982-9cd34d08412e', 'Сушарки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('cc29d384-920a-11f0-9982-9cd34d08412e', '9602de6c-9206-11f0-9982-9cd34d08412e', 'Для кухні')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('00d1978e-920b-11f0-9982-9cd34d08412e', 'cc29d384-920a-11f0-9982-9cd34d08412e', 'Холодильники')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('4981dc0a-920b-11f0-9982-9cd34d08412e', 'cc29d384-920a-11f0-9982-9cd34d08412e', 'Посудомийки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('049bf744-9655-11f0-9982-9cd34d08412e', '9602de6c-9206-11f0-9982-9cd34d08412e', 'Для прибирання')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));
        
        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('122fdad8-9655-11f0-9982-9cd34d08412e', '049bf744-9655-11f0-9982-9cd34d08412e', 'Пилисоси побутові')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('17ba1e6e-9655-11f0-9982-9cd34d08412e', '049bf744-9655-11f0-9982-9cd34d08412e', 'Пилисоси побутові')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('7e93a63c-9655-11f0-9982-9cd34d08412e', '9602de6c-9206-11f0-9982-9cd34d08412e', 'Компьютерна техніка')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('8b6f2214-9655-11f0-9982-9cd34d08412e', '7e93a63c-9655-11f0-9982-9cd34d08412e', 'Ноутбуки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));


        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('925332e6-9655-11f0-9982-9cd34d08412e', '7e93a63c-9655-11f0-9982-9cd34d08412e', 'Декстопи')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('99018048-9655-11f0-9982-9cd34d08412e', '7e93a63c-9655-11f0-9982-9cd34d08412e', 'Аксесуари')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('a18c5184-9655-11f0-9982-9cd34d08412e','99018048-9655-11f0-9982-9cd34d08412e', 'Витратні матеріали')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('aa74211e-9655-11f0-9982-9cd34d08412e', 'a18c5184-9655-11f0-9982-9cd34d08412e', 'Для принтера')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('b3c07312-9655-11f0-9982-9cd34d08412e','aa74211e-9655-11f0-9982-9cd34d08412e', 'Чорнила')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('b8bde07a-9655-11f0-9982-9cd34d08412e','aa74211e-9655-11f0-9982-9cd34d08412e', 'Тонери')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('bdb9f0be-9655-11f0-9982-9cd34d08412e', 'a18c5184-9655-11f0-9982-9cd34d08412e', 'Папір')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('c373ba26-9655-11f0-9982-9cd34d08412e', 'a18c5184-9655-11f0-9982-9cd34d08412e', 'Серветки для чищення')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('c838eaa4-9655-11f0-9982-9cd34d08412e','99018048-9655-11f0-9982-9cd34d08412e', 'Носії даних')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));


        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('e64e6b12-9656-11f0-9982-9cd34d08412e','99018048-9655-11f0-9982-9cd34d08412e', 'Сумки, рюкзаки')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('f3095bfa-9656-11f0-9982-9cd34d08412e', '9602de6c-9206-11f0-9982-9cd34d08412e', 'Меблі')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('fb094e50-9656-11f0-9982-9cd34d08412e', 'f3095bfa-9656-11f0-9982-9cd34d08412e', 'Корпусні')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));

        sql = `INSERT INTO \`groups\`(id, parent_id, name)
        VALUES('ffec620e-9656-11f0-9982-9cd34d08412e', 'f3095bfa-9656-11f0-9982-9cd34d08412e', 'М'які')
        ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        parent_id = VALUES(parent_id)`
        tasks.push(this.dbPool.query(sql));


        return Promise.all(tasks);
    }
    
}


