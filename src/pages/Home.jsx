import React, { useState } from 'react';
import { Box } from '@mui/material';

import HomeBanner from '../components/HomeBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HomeBanner />
    </Box>
  );
};

export default Home;