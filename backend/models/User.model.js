import { DataTypes } from 'sequelize';
import mySQLConnection from '../config/db.js';


const sequelize = mySQLConnection.sequelize;

const User = sequelize.define('User', {
  email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
    validate: {
      isEmail: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
