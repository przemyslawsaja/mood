import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export enum SIGN_IN_FORM_FIELDS {
  EMAIL = "email",
  PASSWORD = "password",
}

export type SignInForm = {
  [SIGN_IN_FORM_FIELDS.EMAIL]: string;
  [SIGN_IN_FORM_FIELDS.PASSWORD]: string;
};

export const defaultSignInFormValues = {
  [SIGN_IN_FORM_FIELDS.EMAIL]: "",
  [SIGN_IN_FORM_FIELDS.PASSWORD]: "",
};

export const signInSchema = yupResolver(
  yup.object().shape({
    [SIGN_IN_FORM_FIELDS.EMAIL]: yup
      .string()
      .required("Field is required")
      .email(),
    [SIGN_IN_FORM_FIELDS.PASSWORD]: yup
      .string()
      .min(6, "Min 6 chars")
      .required("Field is required"),
  }),
);
