import Joi from "joi";

const schema = Joi.object({
    postTitle : Joi.string().max(100).required(),
    postDescription : Joi.string().max(1000).required(),
    targetAmount: Joi.number().min(0).required(),
    category: Joi.string().max(20),
    endDate : Joi.date().required()
});

export default schema;
