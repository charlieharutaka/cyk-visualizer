import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

import RulesList from './rules/RulesList'

/**
 *
 * @return {React.ReactElement}
 */
export default function Parser(): React.ReactElement {
  return (
    <Box my={4}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="medium">
          Rules
        </Typography>
        <RulesList />
        <Button variant="outlined">Validate</Button>
      </Container>
    </Box>
  )
}
