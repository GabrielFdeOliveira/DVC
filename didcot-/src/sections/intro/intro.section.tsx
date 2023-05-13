import { Box, Typography } from '@mui/material';

export const IntroSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">Hello, we are</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        Didcot Volleyball Club
      </Typography>
      <Typography variant="h5" mb={3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste praesentium sequi non rem placeat unde.
      </Typography>
    </Box>
  );
};
