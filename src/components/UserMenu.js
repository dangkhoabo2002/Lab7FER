import React from 'react'
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export default function UserMenu(props) {
  const {user, setUser} = props
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user.picture} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
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
        <Link to="/profile">
          <MenuItem key="profile" onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
        </Link>
        <Link to="/dashboard">
          <MenuItem key="dashboard" onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Dashboard</Typography>
          </MenuItem>
        </Link>
        <Link to="/contactList">
          <MenuItem key="contactList" onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Contact List</Typography>
          </MenuItem>
        </Link>
          <MenuItem key="logout" onClick={e=>handleSignOut(e)}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
      </Menu>
    </Box>
  )
}
