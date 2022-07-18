import React from 'react';
import { Stack, Divider } from '@mui/material';

function Options({ children }) {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem sx={{ borderRightWidth: 1, borderColor: '#77787a' }} />}
      spacing={1.5}
      padding="10px 0"
      fontSize="11px"
      fontWeight="300"
      color="#77787a"
    >
      {children}
    </Stack>
  );
}

export default Options;
