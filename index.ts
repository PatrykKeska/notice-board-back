import express, {json} from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError, ValidationError} from "./utils/errors";

const app = express();
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(limiter)
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(json());
app.get('/', async (req, res) => {
    throw new ValidationError("No way bro!");
})
app.use(handleError);
app.listen(3001, '0.0.0.0', () => console.log('http://localhost:3001'));

