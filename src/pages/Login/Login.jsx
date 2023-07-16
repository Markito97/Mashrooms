import { Button } from "@mui/material";
import { useLazyLoginQuery } from "../../features/Auth/auth";
export const Login = () => {
  const [login, { data }] = useLazyLoginQuery();
  return (
    <Button
      variant='outlined'
      onClick={() => fetch("http://localhost:2995/auth/google/login")}
    >
      Login
    </Button>
  );
};
