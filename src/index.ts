import express, { Express } from 'express';
import dotenv from 'dotenv';
import homeRouter from './routes/home';
import userRouter from './routes/user';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3030;

app.use(homeRouter);
app.use(userRouter);

app.listen(port, () => {
	console.log(`Started listening on port ${port}`);
});
