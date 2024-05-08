import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    // <header className={css.nav}>

    <>{isSignedIn ? <AuthNav /> : <Navigation />}</>
    // </header>
  );
};
export default AppBar;
