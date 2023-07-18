import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  return (
    <Button variant='outlined' href='http://localhost:2995/auth/google/login'>
      Login
    </Button>
  );
};
