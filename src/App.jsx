import Container from '@mui/material/Container'
import { BasicTable, Header, Search } from './components'
import { Box } from '@mui/material'

export default function App() {
  return (
    <Container
      sx={{
        background: '#FAFAFB',
        padding: 10,
        minWidth: '100vw',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Header />
      <Box mb={2}>
        <Search />
      </Box>

      <BasicTable />
    </Container>
  )
}
