import express from 'express';
import bodyParser from 'body-parser';
import User from './models/User.model.js'
import userRoute from './routes/user.js'
import entrollmentRoute from './routes/entrollment.js'
import cors from 'cors';
import Entrollments from './models/Entrollment.model.js';
import dotenv from 'dotenv'

dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


app.use(bodyParser.json());

// Sync the model with the database
User.sync()
  .then(() => {
    console.log('User model synced with the database');
  })
  .catch((err) => {
    console.error('Error syncing User model:', err);
  });

Entrollments.sync()
  .then(() => {
    console.log('Entrollments model synced with the database');
  })
  .catch((err) => {
    console.error('Error syncing User model:', err);
  });


// API endpoint to handle form submissions
app.use('/api/v0/user', userRoute);
app.use('/api/v0/enroll', entrollmentRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
