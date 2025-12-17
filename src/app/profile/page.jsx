'use client'

import {
  Box,
  Card,
  Avatar,
  Typography,
  Button,
  Divider,
  Grid,
  TextField,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'

export default function ProfilePage() {
  const [edit, setEdit] = useState(false)

  return (
    <PageWrapper>
      <Typography variant="h4" fontWeight={900} mb={4}>
        پروفایل کاربران
      </Typography>

      <Grid container spacing={3}>
        {/* Administrator */}
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle('indigo')}>
            <Avatar src="/hossein.saedmokam.png" sx={avatarStyle} />
            <Typography fontWeight={800}>حسین ساعدمحکم</Typography>
            <Typography color="text.secondary" mb={2}>
              Administrator
            </Typography>
            <Button
              fullWidth
              startIcon={<EditIcon />}
              variant="contained"
              onClick={() => setEdit(!edit)}
            >
              ویرایش
            </Button>
          </Card>
        </Grid>

        {/* System Supervisor */}
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle('emerald')}>
            <Avatar src="/ali.png" sx={avatarStyle} />
            <Typography fontWeight={800}>علی نهاوندی</Typography>
            <Typography color="text.secondary" mb={2}>
              System Supervisor
            </Typography>
            <Button fullWidth variant="outlined" disabled>
              ناظر سیستم
            </Button>
          </Card>
        </Grid>

        {/* Security Manager */}
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle('red')}>
            <Avatar src="/1.jpg" sx={avatarStyle} />
            <Typography fontWeight={800}>شکیبا قاسمی</Typography>
            <Typography color="text.secondary" mb={2}>
              Security Manager
            </Typography>
            <Button fullWidth variant="outlined" disabled>
              امنیت سیستم
            </Button>
          </Card>
        </Grid>

        {/* Technical Lead */}
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle('blue')}>
            <Avatar src="/milad.png" sx={avatarStyle} />
            <Typography fontWeight={800}>میلاد کریمی</Typography>
            <Typography color="text.secondary" mb={2}>
              Technical Lead
            </Typography>
            <Button fullWidth variant="outlined" disabled>
              مدیریت فنی
            </Button>
          </Card>
        </Grid>

        {/* Data Analyst */}
        <Grid item xs={12} md={2.4}>
          <Card sx={cardStyle('purple')}>
            <Avatar src="/hosein.png" sx={avatarStyle} />
            <Typography fontWeight={800}>حسین محمدی</Typography>
            <Typography color="text.secondary" mb={2}>
              Data Analyst
            </Typography>
            <Button fullWidth variant="outlined" disabled>
              تحلیل داده
            </Button>
          </Card>
        </Grid>

        {/* اطلاعات ادمین */}
        <Grid item xs={12}>
          <Card sx={{ p: 4, borderRadius: 4 }}>
            <Typography fontWeight={800} mb={2}>
              اطلاعات شخصی (ادمین)
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="نام" fullWidth disabled={!edit} defaultValue="حسین" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="نام خانوادگی"
                  fullWidth
                  disabled={!edit}
                  defaultValue="ساعدمحکم"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="ایمیل"
                  fullWidth
                  disabled={!edit}
                  defaultValue="admin@example.com"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="نقش"
                  fullWidth
                  disabled
                  defaultValue="Administrator"
                />
              </Grid>
            </Grid>

            {edit && (
              <Box mt={4} display="flex" gap={2}>
                <Button variant="contained">ذخیره</Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setEdit(false)}
                >
                  لغو
                </Button>
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

/* ===== Styles ===== */

const avatarStyle = {
  width: 90,
  height: 90,
  mx: 'auto',
  mb: 1.5,
  border: '3px solid rgba(255,255,255,0.3)',
  boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
}

const cardStyle = (color) => ({
  p: 2.5,
  textAlign: 'center',
  borderRadius: 4,
  height: '100%',
  backdropFilter: 'blur(12px)',
  background:
    color === 'indigo'
      ? 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(99,102,241,0.05))'
      : color === 'emerald'
      ? 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.05))'
      : color === 'red'
      ? 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.05))'
      : color === 'blue'
      ? 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.05))'
      : 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(147,51,234,0.05))',
  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
})
