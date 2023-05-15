import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { logoImg } from 'assets';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box height="100v">
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink>
              <Box display="flex" alignItems="center" gap={0.8}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography variant="h5" sx={{ width: 'fit-content' }}>
                  DVC
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
