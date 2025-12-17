'use client'

import { useState, useEffect } from 'react'
import { Box, Grid, Card, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CommentIcon from '@mui/icons-material/Comment'
import VisibilityIcon from '@mui/icons-material/Visibility'

//// Import کامپوننت‌ها ////
import DashboardCalendar from '../components/DashboardCalendar'
import DashboardMap from '../components/DashboardMap'
import LastSales from '../components/LastSales'
import ChatUsers from '../components/ChatUsers'

//// آمار داشبورد ////
const stats = [
  { title: 'کاربران', value: 1200, icon: PersonIcon, color: '#4f46e5' },
  { title: 'سفارش‌ها', value: 320, icon: ShoppingCartIcon, color: '#22c55e' },
  { title: 'نظرات', value: 110, icon: CommentIcon, color: '#facc15' },
  { title: 'بازدیدها', value: 5400, icon: VisibilityIcon, color: '#dc2626' },
]

export default function DashboardPage() {
  //// مدیریت  کامپوننت روی کلاینت ////
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  ////رندر شود mount فقط بعد از////
  if (!mounted) return null

  //// ساختار اصلی داشبورد ////
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} mb={4}>
        {stats.map(({ title, value, icon: Icon, color }) => {
          return (
            <Grid key={title} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  height: 130,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#fff',
                  backgroundColor: color,
                  width: 280,
                }}
              >
                <Box>
                  <Typography variant="h4" fontWeight={800}>
                    {value.toLocaleString('fa-IR')}
                  </Typography>
                  <Typography fontWeight={600}>{title}</Typography>
                </Box>
                <Icon sx={{ fontSize: 42, opacity: 0.8 }} />
              </Card>
            </Grid>
          )
        })}
      </Grid>

      <Box sx={{ display: 'flex', gap: '4%', mb: 4, flexWrap: 'wrap' }}>
        <Box sx={{ flex: 1, minWidth: 320, height: 500 }}>
          <LastSales />
        </Box>
        <Box sx={{ flex: 1, minWidth: 320 }}>
          <DashboardCalendar />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: '4%', flexWrap: 'wrap' }}>
        <Box sx={{ flex: 1, minWidth: 320, height: 500 }}>
          <ChatUsers />
        </Box>
        <Box sx={{ flex: 1, minWidth: 320 }}>
          <DashboardMap />
        </Box>
      </Box>
    </Box>
  )
}
