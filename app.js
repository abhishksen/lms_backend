import express from 'express';
import { config } from 'dotenv';
import ErrorMiddlerware from './middlewares/Error.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

config({
    path: './config/config.env',
});
const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors(corsOptions));

// importing and using routes
import course from './routes/courseRoutes.js';
import user from './routes/userRoutes.js';
import payment from './routes/paymentRoutes.js';
import other from './routes/otherRoutes.js';

app.use('/api/v1', course);
app.use('/api/v1', user);
app.use('/api/v1', payment);
app.use('/api/v1', other);



app.use(ErrorMiddlerware);
export default app;