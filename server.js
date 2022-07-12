import express from 'express';
const app = express();
import 'express-async-errors';
import dotnev from 'dotenv';
dotnev.config();

// packages
import morgan from 'morgan';

// db
import connectDB from './db/connectDB.js';

// routers

// middleware

if (process.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
