import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Box, Container, styled, useTheme } from "@mui/material";
import { HeaderLogo } from "./HeaderLogo";
import { Link } from "react-router-dom";
import { colorTokens } from "../../theme";

export const Header = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main", backgroundImage: "none" }}>
      <Container maxWidth="desktop">
        <AppBarContent>
          <HeaderLogo />
          <Link to={"/login"}>
            <Button
              variant="contained"
              sx={{ whiteSpace: "nowrap", bgcolor: colors.third[100], color: "white" }}
            >
              В корзинку
            </Button>
          </Link>
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
