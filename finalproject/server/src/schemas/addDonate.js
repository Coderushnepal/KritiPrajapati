import Joi from "joi";

const schema = Joi.object({
    message : Joi.string().max(1000),
    amount: Joi.number().min(0).required(),    
    postId: Joi.number().required(),
});

export default schema;