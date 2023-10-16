import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export enum AuthFormFields {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeatPassword',
}

export type SignInForm = {
  [AuthFormFields.EMAIL]: string;
  [AuthFormFields.PASSWORD]: string;
};

export type SignUpForm = {
  [AuthFormFields.NAME]: string;
  [AuthFormFields.REPEAT_PASSWORD]: string;
} & SignInForm;

export const defaultSignInFormValues = {
  [AuthFormFields.EMAIL]: '',
  [AuthFormFields.PASSWORD]: '',
};

export const defaultSignUpFormValues = {
  [AuthFormFields.NAME]: '',
  [AuthFormFields.EMAIL]: '',
  [AuthFormFields.PASSWORD]: '',
  [AuthFormFields.REPEAT_PASSWORD]: '',
};

export const signInSchema = yupResolver(
  yup.object().shape({
    [AuthFormFields.EMAIL]: yup
      .string()
      .required('Field is required')
      .email(),
    [AuthFormFields.PASSWORD]: yup
      .string()
      .min(6, 'Min 6 chars')
      .required('Field is required'),
  }),
);

export const signUpSchema = yupResolver(
  yup.object().shape({
    [AuthFormFields.NAME]: yup
      .string()
      .required('Field is required'),
    [AuthFormFields.EMAIL]: yup
      .string()
      .required('Field is required')
      .email(),
    [AuthFormFields.PASSWORD]: yup
      .string()
      .min(6, 'Min 6 chars')
      .required('Field is required'),
    [AuthFormFields.REPEAT_PASSWORD]: yup
      .string()
      .min(6, 'Min 6 chars')
      .required('Field is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
);
