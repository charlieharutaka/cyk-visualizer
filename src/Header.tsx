import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

import bg from './assets/pawel-czerwinski-Hu6kULsI5dM-unsplash.jpg'

/**
 * The header element
 * @return {React.ReactElement}
 */
export default function Header(): React.ReactElement {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '16px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '192pt',
          color: 'white',
          marginTop: '20px',
          marginBottom: '-30px',
          marginLeft: '45px',
        }}
        variant="h1"
      >
        CYK
      </Typography>
    </Box>
  )
}
