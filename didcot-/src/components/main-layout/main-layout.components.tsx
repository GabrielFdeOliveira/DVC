import React from 'react';
import { AppBar, Box, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { logoImg } from 'assets';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';
import { Navigation } from './navigation/navigation.components';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="100v">
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink className="all_unset" href={`#${SectionIdEnum.intro}`} offset={isSmall ? '56px' : '64px'}>
              <Box display="flex" alignItems="center" gap={0.8} sx={{ cursor: 'pointer' }}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography variant="h5" sx={{ width: 'fit-content' }}>
                  DVC
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isSmall={isSmall} />
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
