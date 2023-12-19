import { Sequelize } from 'sequelize';


class MySQLConnection {
  sequelize = new Sequelize('form', 'root', 'aAn1@r3agja', {
    host: 'localhost',
    dialect: 'mysql',
  });
}

const mySQLConnection = new MySQLConnection;

export default mySQLConnection;