'use client'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  Box,
  InputBase,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function Topbar({ mode, setMode, toggleSidebar }) {
  const isDark = mode === 'dark'

  const toggleTheme = () => {
    setMode(isDark ? 'light' : 'dark')
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <IconButton aria-label="toggle sidebar" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          پنل مدیریت
        </Typography>

        {/* Search */}
        <Box
          sx={{
            ml: 4,
            px: 2,
            py: 0.5,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            backgroundColor: 'action.hover',
            width: 260,
            transition: '0.2s',
            '&:focus-within': {
              backgroundColor: 'action.selected',
            },
          }}
        >
          <SearchIcon sx={{ ml: 1, color: 'text.secondary' }} />
          <InputBase
            placeholder="جستجو..."
            fullWidth
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Theme toggle */}
        <IconButton aria-label="toggle theme" onClick={toggleTheme}>
          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Switch checked={isDark} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  )
}
