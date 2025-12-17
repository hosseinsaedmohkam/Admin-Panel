'use client'


import { Box, Card, Typography } from '@mui/material'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

//// داده‌های نمودار خطی (کاربران و سفارش‌ها) ////
const lineData = [
  { month: 'فروردین', users: 200, orders: 50 },
  { month: 'اردیبهشت', users: 400, orders: 80 },
  { month: 'خرداد', users: 300, orders: 120 },
]

//// داده‌های نمودار ستونی (فروش و بازدید) ////
const barData = [
  { month: 'فروردین', sales: 50, visits: 200 },
  { month: 'اردیبهشت', sales: 80, visits: 400 },
  { month: 'خرداد', sales: 120, visits: 300 },
]

//// داده‌های نمودار دایره‌ای (وضعیت کاربران) ////
const pieData = [
  { name: 'کاربران فعال', value: 400 },
  { name: 'کاربران غیر فعال', value: 200 },
  { name: 'کاربران جدید', value: 150 },
]

//// داده‌های نمودار رادار (مقایسه تیم‌ها) ////
const radarData = [
  { subject: 'UI', A: 120, B: 110 },
  { subject: 'UX', A: 98, B: 130 },
  { subject: 'Performance', A: 86, B: 90 },
  { subject: 'Accessibility', A: 99, B: 85 },
  { subject: 'Features', A: 85, B: 95 },
]

//// رنگ‌های مشترک نمودارها ////
const COLORS = ['#4f46e5', '#22c55e', '#ffc107']

//// کامپوننت اصلی بخش نمودارها ////
export default function ChartSection() {
  return (
    //// کانتینر اصلی – فلکس و ریسپانسیو ////
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }} dir="rtl">

      <Card sx={{ flex: { xs: '0 0 100%', md: '0 0 48%' }, p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          روند کاربران و سفارش‌ها
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="orders"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card sx={{ flex: { xs: '0 0 100%', md: '0 0 48%' }, p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          فروش و بازدید
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="sales" fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="visits" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

  
      <Card sx={{ flex: { xs: '0 0 100%', md: '0 0 48%' }, p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          وضعیت کاربران
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card sx={{ flex: { xs: '0 0 100%', md: '0 0 48%' }, p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          مقایسه شاخص‌ها
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData} outerRadius="80%">
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />

            <Radar
              name="تیم A"
              dataKey="A"
              stroke="#4f46e5"
              fill="#4f46e5"
              fillOpacity={0.6}
            />

            <Radar
              name="تیم B"
              dataKey="B"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.6}
            />

            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  )
}
