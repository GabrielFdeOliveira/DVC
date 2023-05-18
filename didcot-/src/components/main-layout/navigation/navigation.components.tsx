import { AppBar, Box, Button, Dialog, Hidden, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { MenuOutlined, Close } from '@mui/icons-material';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';
import React, { useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';

export type NavigationProps = {
  isSmall: boolean;
};

export const navigationItems = [
  {
    text: 'Home',
    to: SectionIdEnum.intro,
  },
  {
    text: 'About Us',
    to: SectionIdEnum.about,
  },
  {
    text: 'Book a Slot',
    to: SectionIdEnum.form,
  },
];

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  },
);

export const Navigation: React.FC<NavigationProps> = ({ isSmall }) => {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const menuItems = navigationItems.map(({ to, text }) => {
    return (
      <AnchorLink className="all_unset" key={to} href={`#${to}`} offset={isSmall ? '56px' : '64px'}>
        <Button color="inherit" size="large" fullWidth={isSmall} onClick={onCloseHandler}>
          {text}
        </Button>
      </AnchorLink>
    );
  });

  return (
    <>
      <Hidden smDown>
        <Box display="flex" gap={2}>
          {menuItems}
        </Box>
      </Hidden>
      <Hidden smUp>
        <IconButton color="inherit" onClick={onOpenHandler}>
          <MenuOutlined />
        </IconButton>
        <Dialog
          open={open}
          fullScreen
          fullWidth
          TransitionComponent={Transition}
          hideBackdrop
          PaperProps={{
            sx: {
              boxShadow: 'none',
            },
          }}
        >
          <AppBar position="static" sx={{ background: 'white', color: 'text.primary' }}>
            <Toolbar>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
              <IconButton color="inherit" onClick={onCloseHandler}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box display="flex" flexDirection="column" py={3} width="100%">
            {menuItems}
          </Box>
        </Dialog>
      </Hidden>
    </>
  );
};
