import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { colorTokens } from "@/theme";
import Achivements from "../Achievements/Achivements";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingBottom: "24px",
            paddingTop: "24px",
          }}
        >
          <Box sx={{ width: "100%" }}>{children}</Box>
        </Box>
      )}
    </div>
  );
}

export default function TabPanel() {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          textColor={`${colors.third[100]}`}
          TabIndicatorProps={{ style: { background: `${colors.third[100]}` } }}
        >
          <Tab label='Достижения' />
          <Tab label='Пройденные тесты' />
          <Tab label='Жопа с ручкой' />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {<Achivements />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </>
  );
}
