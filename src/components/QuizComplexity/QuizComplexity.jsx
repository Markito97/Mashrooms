import { ReactComponent as ActiveMushroom } from "../../assets/icons/activeMushroom.svg";
import { ReactComponent as InactiveMushroom } from "../../assets/icons/inActiveMushroom.svg";
import React from "react";
import { Box } from "@mui/material";
export const QuizComplexity = ({ complexity }) => {
  const mushroomIcons = Array.from({ length: 5 }, (_, index) =>
    index < complexity ? (
      <ActiveMushroom key={index} />
    ) : (
      <InactiveMushroom key={index} />
    )
  );
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: "5px",
      }}
    >
      {mushroomIcons.map((icon, index) => (
        <React.Fragment key={index + Date.now()}>{icon}</React.Fragment>
      ))}
    </Box>
  );
};
