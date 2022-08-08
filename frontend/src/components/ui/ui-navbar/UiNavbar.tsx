import * as React from 'react';
import { Button, Container, Typography, Toolbar, Box, AppBar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'API', route: '/api' }
];

export const UiNavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <RocketLaunchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
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
                key={page.name}
                sx={{ my: 2, mr: 2, color: 'white', display: 'block' }}
                component={RouterLink}
                to={page.route}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
