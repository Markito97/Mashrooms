import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";

export const ProfileHeader = () => {
  const name = useSelector((state) => state.auth.user.user.name);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "15px",
        fontSize: "20px",
        marginBottom: "25px",
      }}
    >
      <Avatar sx={{ width: "50px", height: "50px" }}></Avatar>
      {name}
    </Box>
  );
};
