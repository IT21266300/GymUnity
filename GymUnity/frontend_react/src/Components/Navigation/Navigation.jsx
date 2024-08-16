import React from 'react';
import { navigationMenu } from '../../Utils/NavigationMenu';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { auth } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogoutMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenLogoutMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };
  return (
    <div className="h-screen sticky top-0" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }}>
      <div style={{padding: '0.5rem 2rem'}}>
        <div className="py-5">
          <img
            className="w-24"
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="logo"
            width="400px"
          />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              onClick={() => {
                if (item.title === 'Profile') {
                  navigate(`/profile/${auth.user?.id}`);
                } else if (item.title === 'Workout Plans') {
                  navigate(`/workout`);
                } else if (item.title === 'Shared Posts') {
                  navigate(`/myposts`);
                } else {
                  navigate(`/${item.title.toLowerCase()}`);
                }
              }}
              className="cursor-pointer flex space-x-3 items-center"
              key={item.title} // Add a unique key for each item in the array
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        {/* <div className="py-10">
          <Button
            sx={{
              width: '100%',
              borderRadius: '29px',
              py: '15px',
              bgcolor: '#B90429',
              '&:hover': {
                bgcolor: '#B90429', // change to blue on hover
              },
            }}
            variant="contained"
            size="large"
          >
            New Post
          </Button>
        </div> */}
      </div>

      <div
        className="flex items-center  justify-between"
        style={{ width: '100%', padding: '1rem 1.5rem 0'}}
      >
        <div className="flex items-center space-x-3">
          <Avatar
            alt="Profile img"
            src={auth.user?.image}
          />

          <div>
            <p className="font-bold">{auth.user?.fullName}</p>
            {/* <p className="opacity-70">@{auth.user?.fullName.split(" ")[0]}</p> */}
          </div>
        </div>
        <Button
          id="basic-button"
          aria-controls={openLogoutMenu ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openLogoutMenu ? 'true' : undefined}
          onClick={handleOpenLogoutMenu}
        >
          <MoreHorizIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openLogoutMenu}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
