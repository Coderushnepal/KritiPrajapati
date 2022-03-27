import Joi from 'joi';

const schema = Joi.object({
  manufacturerId: Joi.number().integer().required(),
  model: Joi.string().max(20).required(),
  horsepower: Joi.number().integer().min(1000),
  images: Joi.array().items(Joi.string())
});

export default schema;