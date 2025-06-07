import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Avatar, Button
} from '@mui/material';
import {
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: 'auto' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: '20ch', '&:focus': { width: '30ch' } },
  },
}));

export default function AdvancedNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuId = 'primary-search-account-menu';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>

          {/* Logo */}
          <Avatar src="/logo192.png" alt="BePlaced" sx={{ mr: 2 }} />

          {/* Brand Name */}
          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}
            >
              BePlaced
          </Typography>


          {/* Search Bar */}
          <Search>
            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 2 }}>
            <Button sx={{ color: 'black' }}>Companies</Button>
            <Button sx={{ color: 'black' }}>Roles</Button>
            <Button sx={{ color: 'black' }}>Skills</Button>
            <Button sx={{ color: 'black' }}>Jobs</Button>
          </Box>

          {/* Mail */}
          <IconButton size="large" aria-label="show mails" color="inherit">
            <Badge badgeContent={2} color="error"><MailIcon /></Badge>
          </IconButton>

          {/* Notifications */}
          <IconButton size="large" aria-label="show notifications" color="inherit">
            <Badge badgeContent={5} color="error"><NotificationsIcon /></Badge>
          </IconButton>

          {/* Profile */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem sx={{ color: 'black' }} onClick={handleMenuClose}>My Account</MenuItem>
        <MenuItem sx={{ color: 'black' }} onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
