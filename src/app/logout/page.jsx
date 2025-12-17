'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Typography, CircularProgress } from '@mui/material'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // حذف توکن یا اطلاعات ورود//
    localStorage.removeItem('auth')
    // ریدایرکت بعد از 1.5 ثانیه//
    const timer = setTimeout(() => {
      router.push('/login')
    }, 1500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        px: 2,
      }}
    >
      <CircularProgress
        color="inherit"
        size={60}
        sx={{ mb: 3 }}
      />
      <Typography variant="h4" fontWeight={700} gutterBottom>
        در حال خروج از حساب...
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        تا چند لحظه دیگر به صفحه ورود منتقل خواهید شد
      </Typography>
    </Box>
  )
}
