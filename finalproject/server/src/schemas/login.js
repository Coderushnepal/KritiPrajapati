import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().max(50).required(),
  password: Joi.string().min(8).max(20).required()
});

export default schema;