import Joi from "joi";

const schema = Joi.object({
    message : Joi.string().max(2000),
    postId: Joi.number().required(),

});

export default schema;