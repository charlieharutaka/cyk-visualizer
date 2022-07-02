import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import React from 'react'

import InputSection from './input/InputSection'
import RulesList from './rules/RulesList'

/**
 *
 * @return {React.ReactElement}
 */
export default function Parser(): React.ReactElement {
  return (
    <Box my={4}>
      <Container maxWidth="md">
        <RulesList />
        <InputSection />
      </Container>
    </Box>
  )
}
