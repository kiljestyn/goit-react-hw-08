import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const MAX_CHAR_NAME_VALIDATION = 38;
const MIN_CHAR_PASSWORD_VALIDATION = 6;

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    ),
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={registerUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Register user</h2>
        <label>
          <span>Name:</span>
          <br />
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <br />
        <label>
          <span>Email:</span>
          <br />
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
          <ErrorMessage className={css.error} component="p" name="email" />
        </label>{" "}
        <br />
        <label>
          <span>Password:</span>
          <br />
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage className={css.error} component="p" name="password" />
        </label>
        <br />
        <button className={css.formBtn} type="submit">
          Create new user
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
