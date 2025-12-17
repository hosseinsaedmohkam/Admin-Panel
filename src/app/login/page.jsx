'use client'

import { useState } from 'react'
import { Box, Card, Typography, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('admin') // پیش‌فرض نام کاربری // 
  const [password, setPassword] = useState('1234') // پیش‌فرض رمز عبور //

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('auth', 'true')
      router.push('/dashboard')
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        px: 2,
      }}
    >
      <Card
        sx={{
          p: 4,
          width: 400,
          borderRadius: 3,
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={3}>
          ورود به پنل مدیریت
        </Typography>

        <TextField
          label="نام کاربری"
          fullWidth
          sx={{ mb: 2 }}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <TextField
          label="رمز عبور"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            py: 1.5,
            fontWeight: 600,
            fontSize: 16,
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            '&:hover': { background: 'linear-gradient(90deg, #5563d6, #5c3a91)' },
          }}
        >
          ورود
        </Button>

        <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
          نام کاربری: <strong>admin</strong> | رمز عبور: <strong>1234</strong>
        </Typography>
      </Card>
    </Box>
  )
}
