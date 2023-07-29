import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHandleSessionQuery } from "./auth";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const { data, isLoading, isError, isSuccess } = useHandleSessionQuery(void 0);
  const isAuth = useSelector((state) => state.auth.user);
  if (isLoading) {
    return <h2>Loading</h2>;
  } else if (isAuth) {
    return children;
  } else {
    return <Navigate to='/login' state={{ from: location }} />;
  }
}
