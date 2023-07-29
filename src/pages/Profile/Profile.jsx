import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { colorTokens } from "@/theme";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import TabPanel from "../../components/TabPanel/TabPanel";

export default function Profile() {
  const name = useSelector((state) => state.auth.user.user.name);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
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
      <TabPanel />
    </Box>
  );
}
