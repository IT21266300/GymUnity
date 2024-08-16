import { Box, Grid } from '@mui/material';
import React from 'react';
import Navigation from './Navigation/Navigation';
import HomeSection from './Home/MiddlePart/HomeSection';
import MealSection from './Meal/MiddlePart/MealSection';
import WorkoutSection from './Workout/MiddlePart/WorkoutSection';
import PostSection from './PostShare/MiddlePart/PostSection';
import RightPart from './RightPart/RightPart';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile';
import TwitDetail from './Home/MiddlePart/TwitDetail';
import TopNavigation from './Navigation/TopNavigation';

const HomePage = () => {
  const { auth, theme } = useSelector((store) => store);

  return (
    // <Grid container className='px-5 lg:px-36 justify-between'xs={12}>

    //     <Grid item xs={3} lg={2.5} className='hidden lg:block  w-full relative'>
    //             <Navigation/>

    //         </Grid>
    //     <Grid item xs={12} lg={6} className={`px-5 lg:px-9 border ${theme.currentTheme==="dark"?"border-gray-800":""} `}>
    //       <Routes>
    //         <Route path='/' element={<HomeSection/>}></Route>
    //         <Route path='/home' element={<HomeSection/>}></Route>
    //         <Route path='/meal' element={<MealSection/>}></Route>
    //         <Route path='/workout' element={<WorkoutSection/>}></Route>
    //         <Route path='/myposts' element={<PostSection/>}></Route>
    //         {/* <Route path='/profile' element={<Profile/>}></Route> */}
    //         <Route path='/profile/:id' element={<Profile/>}></Route>
    //         <Route path='/twit/:id' element={<TwitDetail/>}></Route>
    //       </Routes>

    //     </Grid>
    //     {/* <Grid item  xs={0} lg={3} className='hidden lg:block '>
    //         <RightPart/>
    //     </Grid> */}
    // </Grid>
    <Box sx={{ width: '100%', display: 'flex', gap: '2rem' }}>
      <Box sx={{ width: '350px' }}>
        <Navigation />
      </Box>
      <Box sx={{padding: '2rem 5rem', width: '100%'}}>
        <Box>
          <TopNavigation/>
        </Box>
        <Box sx={{ width: '100%', padding: '1rem 0'}}>
          <Routes>
            <Route path="/" element={<HomeSection />}></Route>
            <Route path="/home" element={<HomeSection />}></Route>
            <Route path="/meal" element={<MealSection />}></Route>
            <Route path="/workout" element={<WorkoutSection />}></Route>
            <Route path="/myposts" element={<PostSection />}></Route>
            {/* <Route path='/profile' element={<Profile/>}></Route> */}
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="/twit/:id" element={<TwitDetail />}></Route>
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
