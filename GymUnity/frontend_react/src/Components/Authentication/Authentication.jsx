import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuthModel from './AuthModel';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import { loginWithGoogleAction } from '../../Store/Auth/Action';

const Authentication = () => {
  const [authModelOpen, setAuthModelOpen] = useState(false);
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthModelClose = () => {
    setAuthModelOpen(false);
    navigate('/');
  };

  const handleAuthModelOpen = (path) => {
    setAuthModelOpen(true);
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname === '/signin' || location.pathname === '/signup') {
      setAuthModelOpen(true);
    }
  }, [location.pathname]);

  const loginWithGoole = (res) => {
    console.log('res : ', res);
    dispatch(loginWithGoogleAction(res));
    // return
  };

  return (
    <div className="">
      {' '}
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <img
            className="w-full h-screen"
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            //src="https://img.freepik.com/premium-photo/gym-with-lot-machines-weights-floor_173770-1295.jpg?w=740"
            alt="img"
          />

          {/* <div className="absolute top-[26%] left-[19%]">
            <svg
            height="300" width="300"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-jwli3a r-4qtqp9 r-yyyyoo r-labphf r-1777fci r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div> */}
        </Grid>
        <Grid className="px-10" item lg={5} xs={12}>
          <div className="py-10">
            <img
              className="w-16"
              src="https://pbs.twimg.com/media/F1iAD_iaYAAu7I3?format=jpg&name=small"
              alt=""
            />
          </div>

          <h2 className="font-bold text-6xl">Share Your Fitness Journey</h2>

          <h1 className="font-bold text-3xl py-16">
            Join with <span style={{ color: '#B90429' }}>GymUnity</span>, Today{' '}
          </h1>

          <div className="w-[60%]">
            <div className="w-full">
              <Button
                onClick={() => handleAuthModelOpen('/signup')}
                sx={{
                  width: '100%',
                  borderRadius: '29px',
                  py: '7px',
                  bgcolor: '#B90429',
                  '&:hover': {
                    bgcolor: '#B90429', // change to blue on hover
                  },
                }}
                variant="contained"
                size="large"
              >
                Create Account
              </Button>

              <p className="py-5 text-center">OR</p>

              <div className="ml-3 mb-5">
                <GoogleLogin
                  width={500}
                  onSuccess={loginWithGoole}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>

              <p className="text-sm mt-2">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-xl mb-5">Already Have Account?</h1>
              <Button
                onClick={() => handleAuthModelOpen('/signin')}
                sx={{
                  width: '100%',
                  borderRadius: '29px',
                  py: '7px',
                  border: '1px solid #B90429',
                  color: '#B90429',
                  '&:hover': {
                    border: '1px solid #B90429',
                    color: '#B90429',
                  },
                }}
                variant="outlined"
                size="large"
              >
                Signin
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModel isOpen={authModelOpen} handleClose={handleAuthModelClose} />
    </div>
  );
};

export default Authentication;
