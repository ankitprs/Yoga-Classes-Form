import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

class MySQLConnection {
  sequelize = new Sequelize(process.env.MYSQL_DATABASE_NAME, process.env.MYSQL_USER_NAME, process.env.MYSQL_PASSWORD,
    {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql',
    });
}

const mySQLConnection = new MySQLConnection;

export default mySQLConnection;