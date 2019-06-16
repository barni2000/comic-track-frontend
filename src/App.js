import React from 'react'
import { Box, Button, Heading, Grommet } from 'grommet'
import { Notification } from 'grommet-icons'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

const App = () => (
  <Grommet theme={theme} full>
    <Box fill>
      <AppBar>
        <Heading level='3' margin='none'>My App</Heading>
        <Button icon={<Notification />} onclick={() => {}} />
      </AppBar>
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align='center' justify='center'>
          app body
        </Box>
      </Box>
    </Box>
  </Grommet>
)

export default App
