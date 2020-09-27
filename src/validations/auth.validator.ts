import { celebrate, Joi, Segments } from 'celebrate';

export const loginValidator = celebrate({
    [Segments.BODY]: Joi.object({
        username: Joi.string().required(),
        password: Joi.string()
            .min(8)
            .max(32)
            .required(),
    }),
});
