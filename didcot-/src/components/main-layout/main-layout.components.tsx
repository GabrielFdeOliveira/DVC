import { Box } from '@mui/material';
import React from 'react';

export type MainLayoutProps = { children: React.ReactNode };

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <Box height="100v">{children}</Box>;
};
