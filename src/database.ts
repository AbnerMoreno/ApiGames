// import mysql from "promise-mysql";
import mysql from "mysql";

import keys from "./keys";

const db = mysql.createConnection(keys.database);
db.connect((err)=>{
    if(err){
        console.log('error en la conexion, code: ', err);
    }else{
        console.log('Base de datos conectada');
    }
})


export default db
