import express from 'express';

import authRouter from './starFighterRouter.js';


const router = express.Router();

router.use(authRouter);


export default router;