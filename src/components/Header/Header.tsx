import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Box, Container, styled, useTheme } from "@mui/material";
import { HeaderLogo } from "./HeaderLogo";
import { Link } from "react-router-dom";
import { colorTokens } from "../../theme";
import { useLazyLogoutQuery } from "@/redux/features/auth/auth";
import { useSelector } from "react-redux";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu.jsx";

export const Header = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [handleLogout] = useLazyLogoutQuery();
  const isAuth = useSelector((state: any) => state.auth.user);

  const logout = async (): Promise<void> => {
    await handleLogout(void 0).unwrap();
  };

  return (
    <AppBar
      position='static'
      sx={{ bgcolor: "primary.main", backgroundImage: "none" }}
    >
      <Container maxWidth='desktop'>
        <AppBarContent>
          <HeaderLogo />
          {isAuth ? (
            <ProfileMenu />
          ) : (
            <Link to={"/login"}>
              <Button
                variant='contained'
                sx={{
                  whiteSpace: "nowrap",
                  bgcolor: colors.third[100],
                  color: "white",
                }}
              >
                Войти
              </Button>
            </Link>
          )}
        </AppBarContent>
      </Container>
    </AppBar>
  );
};

const AppBarContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "8px",
  paddingBottom: "8px",
}));
