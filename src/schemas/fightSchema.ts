import joi from "joi";

const fightSchema = joi.object({
  firstUser: joi.string().required(),
  secondUser:joi.string().required()
});

export default fightSchema;