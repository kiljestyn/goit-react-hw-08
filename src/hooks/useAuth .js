import { useSelector } from "react-redux";
import {
  selectIsRefreshing,
  selectUserData,
  selectIsSignedIn,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserData);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
