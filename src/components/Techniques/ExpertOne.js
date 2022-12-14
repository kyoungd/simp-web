import * as React from 'react';
import { Box, CircularProgress, Typography, Divider } from '@mui/material';
import { useQuery } from 'react-query';
import { getTechniques } from '../api/techniques';

import SkillCardGrid from './SkillCardGrid';
import ExpertHeader from './ExpertHeader';
import { useUserState } from '../UserContext';
import { useLocation } from 'react-router-dom';


export default function ExpertOne() {
  const location = useLocation();
  const { id } = location.state;
  const { jwt } = useUserState();

  const { data, isSuccess, isLoading, isError, error } = useQuery(['techniques'], () =>
    getTechniques(jwt)
  );

  let techn;
  let expert;
  if (isSuccess) {
    techn = data.find((user) => user.id === id);
    expert = techn.features;
  }

  // const expert = activeExperts.find((expert) => expert.id === id);
  return (
    <>
      <Typography variant="h4" sx={{ mb: 5 }}>
        EXPERT
      </Typography>
      {isLoading && (
        <div>
          <CircularProgress />
        </div>
      )}
      {isError && <div>Error: {error.message}</div>}
      {isSuccess && (
        <>
          <ExpertHeader techn={techn} token={jwt} expert={expert} />
          <Box sx={{ padding: 2, width: '100%' }}>
            <Divider>SKILLS</Divider>
          </Box>
          <SkillCardGrid skills={expert.data} />
        </>
      )}
    </>
  );
}
