import Joi from "joi";

const schema = Joi.object({
    postTitle : Joi.string().max(100).required(),
    postDescription : Joi.string().required(),
    targetAmount: Joi.number().min(0).required(),
    category: Joi.string().max(50),
    endDate : Joi.date().required()
});

export default schema;
