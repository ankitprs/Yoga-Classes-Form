import { Sequelize } from 'sequelize';


class MySQLConnection {
  sequelize = new Sequelize(process.env.MYSQL_DATABASE_NAME, process.env.MYSQL_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  });
}

const mySQLConnection = new MySQLConnection;

export default mySQLConnection;