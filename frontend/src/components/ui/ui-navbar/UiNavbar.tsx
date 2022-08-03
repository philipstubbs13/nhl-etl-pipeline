import * as React from 'react';
import { Button, Container, Typography, Toolbar, Box, AppBar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const pages = ['Home', 'About', 'API'];

export const UiNavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <RocketLaunchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NHL ETL Pipeline
          </Typography>
          <Box sx={{ display: { display: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
