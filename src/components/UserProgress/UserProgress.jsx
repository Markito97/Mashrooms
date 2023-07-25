import { Box } from "@mui/material";
export const UserProgress = ({ currentLvl, points }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row ",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "25px",
      }}
    >
      <Box
        sx={{
          border: "1px solid black",
          width: "100%",
          height: "40px",
          borderRadius: "5px",
        }}
      ></Box>
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "1px solid black",
          flexShrink: "0",
        }}
      ></div>
    </Box>
  );
};
