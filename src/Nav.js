import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ScrollToColor from "./ScrollToColor";

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ScrollToColor>
      <AppBar position="sticky" sx={{ backgroundColor: "#4D243D" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", cursor: "pointer" },
              }}
              onClick={() => {
                history.push("/");
              }}
            >
              Rep Now
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/"
                  exact
                  activeStyle={{ color: "#2A1421" }}
                  sx={{
                    color: "#4D243D",
                    "&:hover": {
                      color: "#2A1421",
                    },
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/findreps"
                  activeStyle={{ color: "#2A1421" }}
                  sx={{
                    color: "#4D243D",
                    "&:hover": {
                      color: "#2A1421",
                    },
                  }}
                >
                  Find Your Reps
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/reproductiverights"
                  activeStyle={{ color: "#2A1421" }}
                  sx={{
                    color: "#4D243D",
                    "&:hover": {
                      color: "#2A1421",
                    },
                  }}
                >
                  Reproductive Rights
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                pointer: "cursor",
              }}
              onClick={() => {
                history.push("/");
              }}
            >
              Rep Now
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                exact
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#2A1421",
                  },
                  "&:active": {
                    color: "#2A1421",
                  },
                }}
                component={NavLink}
                to="/"
                activeStyle={{ color: "#2A1421" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#2A1421",
                  },
                }}
                component={NavLink}
                to="/findreps"
                activeStyle={{ color: "#2A1421" }}
              >
                Find Your Reps
              </Button>
              <Button
                component={NavLink}
                to="/reproductiverights"
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#2A1421",
                  },
                }}
                activeStyle={{ color: "#2A1421" }}
              >
                Reproductive Rights
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollToColor>
  );
}
