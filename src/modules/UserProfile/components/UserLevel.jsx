import { Box, Typography } from "@mui/material";

export default function UserLevel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "7px",
        alignItems: "center",
      }}
    >
      <Typography variant='h5'>Ваш уровень:</Typography>
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "1px solid red",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "50px" }}>1</span>
      </div>
    </Box>
  );
}
