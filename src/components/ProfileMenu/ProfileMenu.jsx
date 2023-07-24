import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Tooltip,
  Avatar,
  IconButton,
  MenuItem,
  Typography,
  Menu,
  useTheme,
  Button,
  Divider,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { useLazyLogoutQuery } from "../../redux/features/auth/auth";
import { colorTokens } from "../../theme";
import { Link } from "react-router-dom";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

export const ProfileMenu = () => {
  const { name } = useSelector((state) => state.auth.user.user);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [handleLogout] = useLazyLogoutQuery();

  const logout = async () => {
    await handleLogout(void 0).unwrap();
  };

  const menuItemStlyes = {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    bgcolor: "primary.main",
    width: "100%",
  };

  const linkStyles = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    width: "100%",
  };

  const settings = [
    <Link to={"/profile"} style={linkStyles}>
      <PersonIcon />
      Профиль
    </Link>,
    <Link to={"/"} style={linkStyles}>
      <HomeIcon />
      Главная
    </Link>,
    <Link to={"#"} style={linkStyles}>
      <LightbulbIcon />
      Правила
    </Link>,

    <Link to={"/"} style={linkStyles} onClick={logout}>
      <Logout />
      Выйти
    </Link>,
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          bgcolor: "primary.main !important",
        }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem sx={menuItemStlyes}>
          <Avatar
            sizes='100px'
            variant='circular'
            alt='user-avatar'
            sx={{ width: "32px", height: "32px" }}
          />
          {name}
        </MenuItem>
        <Divider />

        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={handleCloseUserMenu}
            sx={{ ...menuItemStlyes, minWidth: "250px" }}
          >
            {setting}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
