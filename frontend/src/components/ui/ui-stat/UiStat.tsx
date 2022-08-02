import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

interface IProps {
  children: string | React.ReactNode;
  title: string;
}

export const UiStat: React.FC<IProps> = (props) => {
  return (
    <Grid item={true} xs={12} sm={4}>
      <Typography  fontWeight={'bold'}>{props.title}</Typography>
      <Box border={'1px solid #000'} paddingY={0.5}>
          <Typography textAlign={'center'}>{props.children}</Typography>
      </Box>
  </Grid>
  );
}
