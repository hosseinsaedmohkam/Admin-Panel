
'use client'

import { useEffect, useState } from 'react'
import { Card, Typography, List, ListItem, ListItemText } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// داده‌های نمونه////
const lastSales = [
  { user: 'علی محمدی', product: 'لپ‌تاپ', amount: 25000000 },
  { user: 'سارا حسینی', product: 'موبایل', amount: 12000000 },
  { user: 'John Doe', product: 'Tablet', amount: 850 },
  { user: 'Jane Smith', product: 'Headphones', amount: 300 },
  { user: 'میلاد کریمی', product: 'دوربین', amount: 18000000 },
  { user: 'Emma Watson', product: 'کیبورد', amount: 150 },
  { user: 'Hossein Saedmokam', product: 'مانیتور', amount: 7000000 },
  { user: 'Ali Nabavandi', product: 'کارت گرافیک', amount: 25000000 },
]

export default function LastSales({ width = '100%', height = 500 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // hydration mismatch جلوگیری از/////
  if (!mounted) return null

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        width,
        minWidth: 300,
        height,
        background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(34,197,94,0.1))',
        boxShadow: '0 8px 22px rgba(0,0,0,0.1)',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { width: 0, background: 'transparent' },
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#16a34a' }}>
        🛒 آخرین فروش‌ها
      </Typography>

      <List>
        {lastSales.map((sale, index) => (
          <ListItem
            key={index}
            divider
            sx={{
              backgroundColor: index % 2 === 0 ? 'rgba(34,197,94,0.05)' : 'transparent',
              borderRadius: 1,
              mb: 1,
              alignItems: 'flex-start',
            }}
          >
            <ShoppingCartIcon sx={{ color: '#16a34a', mr: 1 }} />

            <ListItemText
              primary={
                <Typography sx={{ fontWeight: 700 }}>
                  {sale.user} - {sale.product}
                </Typography>
              }
              secondary={
                <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
                  مبلغ: {sale.amount.toLocaleString('fa-IR')} تومان
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
