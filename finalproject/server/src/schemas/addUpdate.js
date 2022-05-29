import Joi from "joi";

const schema = Joi.object({
    message : Joi.string().required(),
    postId: Joi.number().required(),
});

export default schema;