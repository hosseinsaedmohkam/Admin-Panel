'use client'

import { Card, Typography, Box } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import faLocale from '@fullcalendar/core/locales/fa'


export default function DashboardCalendar({ height = 400 }) {
  //// لیست رویدادها ////
  const events = [
    { title: 'جلسه تیم', date: '2025-12-01', note: ' ', color: '#16a34a' },
    { title: 'تعطیل', date: '2025-12-04', note: '', color: '#2563eb' },
    { title: 'تحویل پروژه', date: '2025-12-06', note: '', color: '#f59e0b' },
    { title: '', date: '2025-12-10', note: 'بررسی بودجه ', color: '#dc2626' },
  ]

  //// تابع رندر محتوای هر رویداد ////
  const renderEventContent = eventInfo => {
    const color = eventInfo.event.backgroundColor || '#16a34a'
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: color,
          borderRadius: 1,
          p: 0.5,
          mb: 0.3,
          color: '#fff',
          fontSize: 12,
          lineHeight: 1.2,
          whiteSpace: 'normal',
          width: '100%',
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 12, textAlign: 'right', width: '100%' }}>
          {eventInfo.event.title}  
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: 12, textAlign: 'right', width: '100%' }}>
          {eventInfo.event.extendedProps.note}  
        </Typography>
      </Box>
    )
  }

  //// JSX اصلی کامپوننت ////
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        width: '100%',
        height: '100%',
        boxShadow: '0 8px 22px rgba(0,0,0,0.08)',
        background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(34,197,94,0.1))',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 700, color: '#16a34a', textAlign: 'right' }}
      >
        📅 تقویم جلسات
      </Typography>

      <Box
        sx={{
          height: height,
          direction: 'rtl',
          overflow: 'hidden',
          '& .fc-daygrid-day': {
            backgroundColor: '#1e3a2f', 
            border: '1px solid #14532d', 
            color: '#e6f7e6', 
          },
          '& .fc-col-header-cell': {
            backgroundColor: '#14532d',
            fontWeight: 700,
            padding: '8px 0',
            borderBottom: '1px solid #0f3d27',
            color: '#e6f7e6', 
          },
          '& .fc-daygrid-event': {
            fontSize: 12, 
          },
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}  //// پلاگین‌های FullCalendar ////
          initialView="dayGridMonth"  //// حالت نمایش ماهانه ////
          locale={faLocale}  //// زبان فارسی ////
          height="100%"
          headerToolbar={{
            left: 'prev,next today',  
            center: 'title',           
            right: '',
          }}
          events={events.map(ev => ({
            title: ev.title,
            date: ev.date,
            extendedProps: { note: ev.note },  //// اضافه کردن توضیح به رویداد ////
            backgroundColor: ev.color,
          }))}
          eventContent={renderEventContent}  //// تابع رندر رویدادها ////
          dayMaxEvents={true}  //// نمایش تعداد محدودی رویداد و + بیشتر ////
          contentHeight="auto"  //// ارتفاع خودکار محتوا ////
        />
      </Box>
    </Card>
  )
}
