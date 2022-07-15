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
import authRouter from './routes/authRoutes.js';

// middleware
import errorHandler from './middleware/error-handler.js';
import notFound from './middleware/not-found.js';

if (process.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/auth', authRouter);

app.use(notFound);
app.use(errorHandler);

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
