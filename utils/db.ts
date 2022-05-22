import {createPool} from "mysql2/promise";


export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'notice-board',
    port: 8889,
    namedPlaceholders: true,
    decimalNumbers: true,
})