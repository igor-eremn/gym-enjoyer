import React, { useState } from 'react';
import { Box } from '@mui/material';

import HomeBanner from '../components/HomeBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HomeBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  );
};

export default Home;