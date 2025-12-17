'use client'

import { useState, useMemo } from 'react'
import { Box, ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme, lightTheme } from '../../theme'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Dashboard from '../components/Dashboard'

export default function DashboardPage() {
  const [mode, setMode] = useState('dark')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar open={sidebarOpen} />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Topbar mode={mode} setMode={setMode} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Box sx={{ flex: 1, p: 3 }}>
            <Dashboard />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
