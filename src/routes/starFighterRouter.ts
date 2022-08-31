import express from 'express';
import { signIn, signUp } from '../controllers/starFighterController.js';
import { validate } from '../middlewares/validationMiddleware.js';
import fightSchema from '../schemas/fightSchema.js';

const starFighterRouter = express.Router();
starFighterRouter.post("/battle", (req, res, next) => validate(req, res, next, fightSchema), signUp);
starFighterRouter.get("/", signIn);


export default starFighterRouter