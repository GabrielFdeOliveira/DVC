import { Box, Typography } from '@mui/material';

export const AboutSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">If you're interested</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        Join us today!
      </Typography>
      <Typography variant="h5" mb={3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste praesentium sequi non rem placeat unde.
      </Typography>
    </Box>
  );
};
