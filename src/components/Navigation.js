import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import Login from "./Login";
import UserMenu from "./UserMenu";

const pages = ["Home", "Contact", "About"];
const settings = ["Profile", "Dashboard", "Logout"];
const path = ["/profile", "/dashboard", "/logout"];
function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [user, setUser] = React.useState({});
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "Pink",
              textDecoration: "none",
            }}
          >
            KOW
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  padding: "2vh 4vh",
                }}
              >
                Home
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  padding: "2vh 4vh",
                }}
              >
                Contact
              </Button>
            </Link>

            <Link to="/about">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  padding: "2vh 4vh",
                }}
              >
                About
              </Button>
            </Link>
          </Box>

          
          

          {Object.keys(user).length !== 0 ?
            <UserMenu user={user} setUser={setUser}/> : <Login setUser={setUser}/>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
