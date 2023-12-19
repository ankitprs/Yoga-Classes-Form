import { DataTypes } from 'sequelize';
import mySQLConnection from '../config/db.js';


const sequelize = mySQLConnection.sequelize

const Entrollments = sequelize.define('Entrollments', {
  month_email_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  batch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Entrollments;
