import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';

export const UiStat = (props) => {
  return (
    <Grid item={true} xs={12} sm={4}>
      <Typography  fontWeight={'bold'}>{props.title}</Typography>
      <Box border={'1px solid #000'} paddingY={0.5}>
          {typeof props.children === 'number' && (
            <Typography textAlign={'center'}><CountUp end={props.children} /></Typography>
          )}
          {typeof props.children !== 'number' && (
            <Typography textAlign={'center'}>{props.children}</Typography>
          )}
      </Box>
  </Grid>
  );
}
