'use client'

import { useState, useMemo } from 'react'
import { Box, ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme, lightTheme } from '../../theme'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import ChartSection from '../components/ChartSection'

export default function ChartsPage() {

  //////وضعیت تم (تاریک / روشن)////////

  const [mode, setMode] = useState('dark')

  /////وضعیت باز و بسته بودن سایدبار////////

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  /* -------------------- Theme -------------------- */

//////////جلوگیری از رندر مجدد غیرضروری تم//////////

  const theme = useMemo(
    () => (mode === 'dark' ? darkTheme : lightTheme),
    [mode]
  )

  /* -------------------- Handlers -------------------- */

  ///////////تغییر وضعیت سایدبار////////

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  /* -------------------- Render -------------------- */

  return (
    <ThemeProvider theme={theme}>
      {/* ریست استایل‌های پیش‌فرض مرورگر */}
      <CssBaseline />

      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* سایدبار */}
        <Sidebar open={isSidebarOpen} />

        {/* محتوای اصلی */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* نوار بالا */}
          <Topbar
            mode={mode}
            setMode={setMode}
            toggleSidebar={toggleSidebar}
          />

          {/* بخش اصلی صفحه (چارت‌ها) */}
          <Box sx={{ flex: 1, p: 3 }}>
            <ChartSection />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
