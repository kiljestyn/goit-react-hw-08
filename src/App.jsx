import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectError, selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import phonebookContacts from "./contact.json";

const App = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}
      <ContactList />
    </>
  );
};

export default App;
