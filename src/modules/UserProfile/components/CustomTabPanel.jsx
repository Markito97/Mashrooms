import { Box } from "@mui/material";

export const CustomTabPanel = (props) => {
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
};
