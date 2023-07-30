import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { colorTokens } from "@/theme";
import TabPanel from "../../modules/UserProfile/components/TabPanel";
import { ProfileHeader } from "../../modules/UserProfile/components/ProfileHeader";
import { UserProfile } from "../../modules/UserProfile/UserProfile";
export default function Profile() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <UserProfile />
    </Box>
  );
}
