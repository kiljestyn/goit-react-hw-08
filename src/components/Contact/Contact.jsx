import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    const contactId = id;
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.contactItem}>
      <div>
        <p className={css.text}>👤{name}</p>
        <p className={css.text}>📞{number}</p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
