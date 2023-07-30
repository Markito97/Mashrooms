import { Box, Typography } from "@mui/material";
import UserLevel from "./UserLevel";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserProgress } from "./UserProgress";

export default function Achivements() {
  const [value, onChange] = useState(new Date());
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        backgroundColor: "#2e3856",
        borderRadius: "7px",
        padding: "25px",
        boxSizing: "border-box",
      }}
    >
      <Typography variant='h4'>Достижения</Typography>
      <Box
        sx={{
          paddingLeft: "35px",
          paddingRight: "35px",
          paddingBottom: "75px",
          paddingTop: "75px",
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        <UserLevel />
        <div
          style={{ width: "320px", height: "300px", border: "1px solid red" }}
        >
          {" "}
          тут будет какой-то компонент
        </div>
        <div
          style={{ width: "120px", height: "180px", border: "1px solid red" }}
        >
          {" "}
          тут будет какой-то компонент
        </div>
      </Box>
      <UserProgress />
    </Box>
  );
}
