import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialLoginValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  // validation schema
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });
  return (
    <div className={css.container}>
      <Formik
        initialValues={initialLoginValues}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        <Form className={css.form}>
          <h2 className={css.title}>Log in</h2>
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
            Let`s start
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
