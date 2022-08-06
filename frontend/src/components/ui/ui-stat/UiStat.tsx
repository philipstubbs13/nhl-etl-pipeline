import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';

interface IProps {
  /**
   * The stat to be displayed.
   */
  children: number | string;
  /**
   * The title associated with the stat being displayed.
   */
  title: string;
}

export const UiStat: React.FC<IProps> = (props) => {
  
  return (
    <Grid item={true} xs={12} sm={4}>
      <Typography fontWeight={'bold'} textAlign={'center'}>{props.title}</Typography>
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
