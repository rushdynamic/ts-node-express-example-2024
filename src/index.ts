import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3030;

app.get('/', (req, res) => {
	res.send('Simple rest body');
});

app.listen(port, () => {
	console.log(`Started listening on port ${port}`);
});
