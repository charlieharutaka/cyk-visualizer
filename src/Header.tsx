import { Box, Typography } from '@mui/material'
import bg from './images/pawel-czerwinski-Hu6kULsI5dM-unsplash.jpg'

export default function Header() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
