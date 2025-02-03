import "./AuthForm.css";
import { useFormik } from "formik";
import { NavLink } from "react-router";
import { PATHS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../store/authSlice";
import { authValidationSchema, signInValidationSchema } from "../../utils/validationSchemes";
import { error } from "../../utils/selectors";

type AuthFormType = {
  type: "signin" | "signup";
};

export const AuthForm = ({ type }: AuthFormType) => {
  const isSignup = type === "signup";

  const errorMessage = useSelector(error);
  const dispatch = useDispatch();

  type FormValues = {
    username: string;
    password: string;
  };
  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: isSignup ? authValidationSchema : signInValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (isSignup) {
        dispatch(registerUser(values));
      }
      else {
        dispatch(loginUser(values))
      }
    },
  });

  return (
    <div className="container form">
      <div className="form_wrapper">
        <h1 className="form_title">{isSignup ? "Sign Up" : "Sign In"}</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="sign_form"
          autoComplete="false"
        >
          <label className="sign_label" htmlFor="username">
            Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.username}
            className="sign_input"
            type="text"
            name="username"
          />
          {formik.touched.username && formik.errors.username && (
            <div className="error-message">{formik.errors.username}</div>
          )}
          <label className="sign_label" htmlFor="password">
            Password
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            className="sign_input"
            type="password"
            name="password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
          <button className="sign_button" type="submit">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {isSignup ? (
          <p className="link">
            Already registered? <NavLink to={PATHS.SIGNIN}>Sign In</NavLink>
          </p>
        ) : (
          <p className="link">
            New here? <NavLink to={PATHS.SIGNUP}>Sign Up</NavLink>
          </p>
        )}
        <span className="error">{errorMessage}</span>
      </div>
    </div>
  );
};
