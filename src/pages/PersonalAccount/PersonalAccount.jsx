import { Button } from "@mui/material";
import { useEffect } from "react";
export const PersonalAccount = () => {
  useEffect(() => {
    fetch("http://localhost:2995/auth/refresh", {
      credentials: "include",
    });
  });
  return (
    <div>
      <Button variant='outlined'>тест отправки запроса</Button>
    </div>
  );
};
