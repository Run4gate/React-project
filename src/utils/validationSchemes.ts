import * as Yup from "yup";

export const authValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(15, "Maximum 15 characters")
    .required("Username required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(15, "Maximum 15 characters")
    .required("Password required"),
});

export const signInValidationSchema = Yup.object({
  username: Yup.string(),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(15, "Maximum 15 characters")
    .required("Password required"),
});
