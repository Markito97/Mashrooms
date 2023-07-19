import { useLazyLogoutQuery } from "@/redux/auth";
import { Button } from "@mui/material";

const Profile = () => {
  const [handleLogout] = useLazyLogoutQuery();

  const logout = async (): Promise<void> => {
    await handleLogout(void 0).unwrap();
  };

  return (
    <div>
      Profile
      <Button onClick={logout} variant="outlined">
        Logout
      </Button>
    </div>
  );
};

export default Profile;
