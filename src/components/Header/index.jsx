import { Box } from '@mui/material'

export const Header = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        background: '#2196F3',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '48px',
        color: 'white',
        fontSize: 24,
        fontWeight: 500,
        padding: '3px 25px',
      }}
    >
      MUI Table v5.15.15
    </Box>
  )
}
