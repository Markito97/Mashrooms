import { useLazyLogoutQuery } from "@/redux/features/auth/auth";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { name } = useSelector((state: any) => state.auth.user.user);
  return <div>{`Привет, ${name}`}</div>;
};

export default Profile;
