import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material';

const SuspenseLoader = () => {
  return (
    <Box>
        <CircularProgress/>
        <Typography>Loading...</Typography>
    </Box>
  )
}

export default SuspenseLoader;