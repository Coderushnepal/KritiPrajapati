import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email().max(50).required(),
  fullName: Joi.string().max(50).required(),
  phoneNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/),
  password: Joi.string().min(8).max(50).required(),
});

export default schema;