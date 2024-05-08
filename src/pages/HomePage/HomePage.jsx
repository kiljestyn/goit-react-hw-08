import { RiContactsBook3Line } from "react-icons/ri";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <p>TO GET STARTED, PLEASE LOG IN!</p>
      <span className={css.homeSvg}>
        <RiContactsBook3Line />
      </span>
    </div>
  );
};

export default HomePage;
