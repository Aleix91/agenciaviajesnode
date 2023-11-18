import Sequelize  from "sequelize";
import dotenv from 'dotenv';

// Obtener las variables de entorno
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquaire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;