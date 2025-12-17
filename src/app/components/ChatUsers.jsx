'use client'

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Badge,
} from '@mui/material'

//// داده‌های نمونه کاربران چت ////
const chatUsers = [
  { name: 'علی محمدی', message: 'سلام، پروژه آماده است!', online: true, unread: true },
  { name: 'سارا حسینی', message: 'لطفا گزارش را ارسال کن', online: false, unread: false },
  { name: 'John Doe', message: 'Meeting at 5 PM', online: true, unread: true },
  { name: 'Jane Smith', message: 'Reviewed the document', online: false, unread: false },
  { name: 'میلاد کریمی', message: 'شروع جلسه', online: true, unread: true },
  { name: 'Emma Watson', message: 'Client feedback received', online: false, unread: true },
  { name: 'Hossein Saedmokam', message: 'Check the dashboard', online: true, unread: false },
  { name: 'Ali Nabavandi', message: 'Update done', online: false, unread: false },
]

//// کامپوننت لیست کاربران چت ////
export default function ChatUsers({ width = '100%', height = 500 }) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        width,
        minWidth: 300,
        height,
        overflowY: 'auto',
        background:
          'linear-gradient(135deg, rgba(79,70,229,0.05), rgba(99,102,241,0.1))',
        boxShadow: '0 8px 22px rgba(0,0,0,0.1)',
        '&::-webkit-scrollbar': { width: 0, background: 'transparent' },
      }}
      dir="rtl"
    >
      <Typography variant="h5" mb={2} fontWeight={700} color="#4f46e5">
        💬 چت کاربران
      </Typography>

      <List>
        {chatUsers.map((user, index) => (
          <ListItem
            key={index}
            divider
            sx={{
              mb: 1,
              borderRadius: 1,
              alignItems: 'flex-start',
              backgroundColor: user.unread
                ? 'rgba(79,70,229,0.1)'
                : 'transparent',
            }}
          >
            <Badge
              variant="dot"
              color={user.online ? 'success' : 'error'}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar sx={{ width: 40, height: 40, ml: 1 }}>
                {user.name.charAt(0)}
              </Avatar>
            </Badge>

            <ListItemText
              primary={
                <Typography fontWeight={user.unread ? 700 : 500}>
                  {user.name}
                </Typography>
              }
              secondary={
                <Typography fontSize={13} color="text.secondary">
                  {user.message}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
