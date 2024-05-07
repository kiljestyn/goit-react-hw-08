import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const MAX_CHAR_NAME_VALIDATION = 50;
const MIN_CHAR_NAME_VALIDATION = 3;

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required!")
    .max(MAX_CHAR_NAME_VALIDATION, `Too long!`)
    .min(MIN_CHAR_NAME_VALIDATION, `Too short!`),
  number: Yup.string()
    .required("Required!")
    .matches("^\\d{3}-\\d{2}-\\d{2}$", "Number format 111-11-11"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span>Name</span>
          <br />
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage
            className={css.errorMessage}
            component="p"
            name="name"
          />
          <br />
        </label>
        <label>
          <span>Number</span>
          <br />
          <Field className={css.field} type="text" name="number" />
          <ErrorMessage
            className={css.errorMessage}
            component="p"
            name="number"
          />
          <br />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
