import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export enum AUTH_FORM_FIELDS {
    NAME = 'name',
    EMAIL = 'email',
    PASSWORD = 'password',
    REPEAT_PASSWORD = 'repeatPassword',
}

export type SignInForm = {
    [AUTH_FORM_FIELDS.EMAIL]: string;
    [AUTH_FORM_FIELDS.PASSWORD]: string;
};

export type SignUpForm = {
    [AUTH_FORM_FIELDS.NAME]: string;
    [AUTH_FORM_FIELDS.REPEAT_PASSWORD]: string;
} & SignInForm;

export const defaultSignInFormValues = {
    [AUTH_FORM_FIELDS.EMAIL]: '',
    [AUTH_FORM_FIELDS.PASSWORD]: '',
};

export const defaultSignUpFormValues = {
    [AUTH_FORM_FIELDS.NAME]: '',
    [AUTH_FORM_FIELDS.EMAIL]: '',
    [AUTH_FORM_FIELDS.PASSWORD]: '',
    [AUTH_FORM_FIELDS.REPEAT_PASSWORD]: '',
};

export const signInSchema = yupResolver(
    yup.object().shape({
        [AUTH_FORM_FIELDS.EMAIL]: yup
            .string()
            .required('Field is required')
            .email(),
        [AUTH_FORM_FIELDS.PASSWORD]: yup
            .string()
            .min(6, 'Min 6 chars')
            .required('Field is required'),
    }),
);

export const signUpSchema = yupResolver(
    yup.object().shape({
        [AUTH_FORM_FIELDS.NAME]: yup
            .string()
            .required('Field is required'),
        [AUTH_FORM_FIELDS.EMAIL]: yup
            .string()
            .required('Field is required')
            .email(),
        [AUTH_FORM_FIELDS.PASSWORD]: yup
            .string()
            .min(6, 'Min 6 chars')
            .required('Field is required'),
        [AUTH_FORM_FIELDS.REPEAT_PASSWORD]: yup
            .string()
            .min(6, 'Min 6 chars')
            .required('Field is required')
            .oneOf([yup.ref('password')], 'Passwords must match')
    }),
)
