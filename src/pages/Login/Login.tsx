import { Button, Box, Typography, styled, useTheme } from "@mui/material";
import { colorTokens } from "@/theme";
import GoogleIcon from "@mui/icons-material/Google";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const isAuth = useSelector((state: any) => state.auth.user);
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <LoginWrapper>
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          bgcolor: "primary.main",
          borderRadius: "4px",
          minHeight: "300px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "16px" }}>
          <GoogleIcon />
          <Typography variant='h5'>Войти с помошью грибника</Typography>
        </Box>
        <Button
          variant='contained'
          sx={{
            bgcolor: colors.third[100],
          }}
          href='http://localhost:2995/auth/google/login'
        >
          В корзинку
        </Button>
      </Box>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
}));
