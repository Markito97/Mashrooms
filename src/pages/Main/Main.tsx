import styles from "./main.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import { ReactComponent as BackImg } from "../../assets/img/quizzesBackground.svg";
import { useTheme, Box } from "@mui/material";
import { colorTokens } from "@/theme";

const Main = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <div className={styles.mainWrapper}>
      <Box>
        <BackImg />
      </Box>
      <Box sx={{ position: "absolute", bottom: "350px" }}>
        <Link to={"/quizzes"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.third[100],
            }}
          >
            Сбор
          </Button>
        </Link>
      </Box>
    </div>
  );
};
export { Main };
