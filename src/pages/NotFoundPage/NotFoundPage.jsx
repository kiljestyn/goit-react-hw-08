import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import css from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Link className={css.link} to="/">
        Go Home
      </Link>
      <p className={css.text}>Whoops!</p>
      <p className={css.text1}>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
