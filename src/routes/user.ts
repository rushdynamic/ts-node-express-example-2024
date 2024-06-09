import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/profile', (_req: Request, res: Response) => {
	res.json({ name: 'Gokul', age: 27 });
});

export default router;
