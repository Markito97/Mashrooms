import { Button } from "@mui/material";
import { useHandleSessionQuery, useLazyLogoutQuery } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import { signin, signout } from "../../redux/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export const Profile = () => {
  const dispatch = useDispatch();
  const [handleLogout] = useLazyLogoutQuery();
  const logout = async () => {
    dispatch(signout());
    await handleLogout(void 0).unwrap();
  };

  return (
    <div>
      Profile
      <Button onClick={logout} variant='outlined'>
        Logout
      </Button>
    </div>
  );
};
