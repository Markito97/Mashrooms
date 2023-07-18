import { Button } from "@mui/material";
import { useHandleSessionQuery, useLazyLogoutQuery } from "../../redux/auth";

export const Profile = () => {
  const { data } = useHandleSessionQuery(void 0);

  const [handleLogout] = useLazyLogoutQuery();
  console.log(data);

  const logout = async () => {
    await handleLogout(void 0).unwrap();
  };

  return (
    <div>
      Profile
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
