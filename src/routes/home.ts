import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
	res.send('hello world');
});

export default router;
