import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeTheme } from '../../Store/Theme/Action';
import { logout, searchUser } from '../../Store/Auth/Action';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function TopNavigation() {
  const { auth, theme } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogoutMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const handleChangeTheme = () => {
    dispatch(changeTheme(theme.currentTheme === 'dark' ? 'light' : 'dark'));
  };
  const handleSearchUser = (event) => {
    setSearch(event.target.value);
    dispatch(searchUser(event.target.value));
  };
  const navigateToProfile = (id) => {
    navigate(`/profile/${id}`);
    setSearch('');
  };

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
    <Box
      sx={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '10px',
        padding: '0 1rem'
      }}
    >
      {/* search */}
      <div>
        <div className="relative flex items-center">
          <input
            value={search}
            onChange={handleSearchUser}
            type="text"
            placeholder="Search..."
            className={`py-3 rounded-full outline-none text-gray-500 w-full pl-12 ${
              theme.currentTheme === 'light' ? 'bg-slate-300' : 'bg-[#151515]'
            }`}
          />
          <span className="absolute top-0 left-0 pl-3 pt-3">
            <SearchIcon className="text-gray-500" />
          </span>
          {search && (
            <div
              className={` overflow-y-scroll hideScrollbar absolute z-50 top-14  border-gray-700 h-[40vh] w-full rounded-md ${
                theme.currentTheme === 'light'
                  ? 'bg-white'
                  : 'bg-[#151515] border'
              }`}
            >
              {auth.searchResult.map((item) => (
                <div
                  onClick={() => navigateToProfile(item.id)}
                  className="flex items-center hover:bg-slate-800 p-3 cursor-pointer"
                >
                  <Avatar alt={item.fullName} src={item.image} />
                  <div className="ml-2">
                    <p>{item.fullName}</p>
                    <p className="text-sm text-gray-400">
                      @{item.fullName.split(' ').join('_').toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* logout */}
      <div>
        <div
          className="flex items-center  justify-between"
          style={{ width: '100%', padding: '1rem 1.5rem 0' }}
        >
          <div className="flex items-center space-x-3">
            <Avatar
              alt="Profile img"
              src={auth.user.image}
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
    </Box>
  );
}
