import { Box, Typography } from "@mui/material";
import UserLevel from "../UserLevel/UserLevel";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./calendarStyles.module.css";
import { UserProgress } from "../UserProgress/UserProgress";

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
        {/* типо каленадрь */}
        <div>
          <Calendar
            onChange={onChange}
            value={value}
            next2Label={null}
            prev2Label={null}
            className={styles.test}
          />
        </div>
        {/* <div
          style={{ width: "320px", height: "300px", border: "1px solid red" }}
        ></div> */}
        {/* типо хуй знает что */}
        <div
          style={{ width: "120px", height: "180px", border: "1px solid red" }}
        ></div>
      </Box>
      <Box>
        <Typography sx={{ marginBottom: "25px" }} variant='h6'>
          Набери n очков и апни следующий уровень!
        </Typography>

        <UserProgress />
      </Box>
    </Box>
  );
}
