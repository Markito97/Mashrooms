import { useTheme } from "@emotion/react";
import { colorTokens } from "@/theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

export const TabsLine = ({ handleChange, value }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
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
  );
};
