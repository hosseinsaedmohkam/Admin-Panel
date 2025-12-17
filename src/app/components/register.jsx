'use client'
import { useState } from 'react'
import { Box, Button, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material'

export default function RegisterForm({ onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    if (onClose) onClose()
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 400,
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" textAlign="center">ثبت نام در سایت</Typography>

      <TextField
        label="نام و نام خانوادگی"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        label="ایمیل"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        label="رمز عبور"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        label="تکرار رمز عبور"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
      />

      <FormControlLabel
        control={<Checkbox name="agree" checked={form.agree} onChange={handleChange} />}
        label="با شرایط موافقم"
      />

      <Button type="submit" variant="contained" color="primary" disabled={!form.agree}>
        ثبت نام
      </Button>
      <Button onClick={onClose} variant="outlined" color="secondary">
        بستن
      </Button>
    </Box>
  )
}
