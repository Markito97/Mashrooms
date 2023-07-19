import { Container, Box } from "@mui/material";
import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <Box component='footer'>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Container maxWidth='desktop'>
          <div className={styles.footerWrapper}>
            {/* <div className={styles.footerText}>Корзинка для пожертвований: null</div> */}
          </div>
        </Container>
      </Box>
    </Box>
  );
};
