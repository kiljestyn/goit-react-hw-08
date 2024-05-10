import styled from "@emotion/styled";
import phonebook from "../../images/phoneBook.svg";
import { useState } from "react";
import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleImageClick = () => {
    setLoggedIn(true);
  };
  const Image = styled.img`
    width: 400px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
    cursor: pointer;
  `;
  const Text = styled.p`
    margin-top: 110px;
    text-align: center;
    visibility: ${loggedIn ? "hidden" : "visible"};
  `;

  return (
    <div>
      <Text>CREATE YOUR OWN PHONEBOOK</Text>
      {/* <p>TO GET STARTED, PLEASE LOG IN!</p> */}

      <Image
        src={phonebook}
        alt="phonebook"
        onClick={handleImageClick}
        style={{ opacity: loggedIn ? 0.5 : 1 }}
      />
      {loggedIn && (
        <p className={css.text}>
          TO GET STARTED, PLEASE <NavLink to="/login">LOG IN!</NavLink>!
        </p>
      )}
    </div>
  );
};

export default HomePage;
