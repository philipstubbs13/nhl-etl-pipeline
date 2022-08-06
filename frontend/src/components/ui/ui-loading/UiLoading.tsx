import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';


export const UiLoading: React.FC = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant={'h5'} textAlign={'center'}>
            Loading...
        </Typography>
        <Typography variant={'h5'} textAlign={'center'}>
            <CircularProgress />
        </Typography>
    </Box>
  );
};