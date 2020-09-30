import { celebrate, Joi, Segments } from 'celebrate';

export const signupUserValidator = celebrate({
    [Segments.BODY]: Joi.object({
        email: Joi.string()
            .min(8)
            .max(255)
            .required(),
        password: Joi.string()
            .min(8)
            .max(255)
            .required(),
        firstName: Joi.string()
            .max(255)
            .required(),
        lastName: Joi.string()
            .max(255)
            .required(),
        avatar: Joi.string(),
        gender: Joi.boolean().required(),
        birthday: Joi.date().required(),
        // statusId: Joi.string().required(),
        phones: Joi.array()
            .items(
                Joi.string()
                    .min(10)
                    .max(11)
            )
            .required(),
        addressIds: Joi.array()
            .items(Joi.string())
            .required(),
    }),
});

export const signinUserValidator = celebrate({
    [Segments.BODY]: Joi.object({
        email: Joi.string()
            .max(255)
            .required()
            .error(new Error('Email is a required field!')),
        password: Joi.string()
            .min(8)
            .max(255)
            .required(),
    }),
});

export const updateUserValidator = celebrate({
    [Segments.BODY]: Joi.object({
        email: Joi.string()
            .min(8)
            .max(255),
        password: Joi.string()
            .min(8)
            .max(255),
        firstName: Joi.string().max(255),
        lastName: Joi.string().max(255),
        avatar: Joi.string(),
        gender: Joi.boolean(),
        birthday: Joi.date(),
        phones: Joi.array().items(
            Joi.string()
                .min(10)
                .max(11)
        ),
        descriptionBlocked: Joi.string(),
        groupRoleIds: Joi.array().items(Joi.string()),
        pollResponseIds: Joi.array().items(Joi.string()),
        statusId: Joi.string(),
        addressIds: Joi.array().items(Joi.string()),
    }),
    [Segments.PARAMS]: Joi.object({
        _id: Joi.string().required(),
    }),
});
