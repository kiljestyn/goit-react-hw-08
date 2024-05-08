import { useSelector } from "react-redux";
import { selectLoading } from "./../../redux/contacts/selectors";
import AppBar from "../AppBar/AppBar";
import Loader from "./../Loader/Loader";

const Layout = ({ children }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
      {isLoading && <Loader />}
    </>
  );
};

export default Layout;
