'use client'

import { Box, Card, Typography, Switch, FormControlLabel, Select, MenuItem } from '@mui/material'
import PageWrapper from '../components/PageWrapper'

export default function SettingsPage() {
  return (
    <PageWrapper>
      <Box>
        <Typography variant="h4" fontWeight={800} mb={3}>
          تنظیمات
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>

          <Card sx={{ p: 3, borderRadius: 3, flex: '1 1 300px', minWidth: 300 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              تنظیمات اصلی
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight={600}>حالت تاریک</Typography>
              <Switch checked />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              فعال کردن حالت تاریک برای راحتی چشم و کاهش مصرف باتری
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight={600}>اعلان‌ها</Typography>
              <Switch checked />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              دریافت اعلان‌ها برای تغییرات مهم در سیستم
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight={600}>هشدار ایمیل</Typography>
              <Switch />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              دریافت ایمیل برای هر اطلاعیه جدید
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight={600}>زبان</Typography>
              <Select value="fa" size="small">
                <MenuItem value="fa">فارسی</MenuItem>
                <MenuItem value="en">انگلیسی</MenuItem>
                <MenuItem value="ar">عربی</MenuItem>
              </Select>
            </Box>
            <Typography variant="body2" color="text.secondary">
              انتخاب زبان نمایش پنل مدیریت
            </Typography>
          </Card>

          <Card sx={{ p: 3, borderRadius: 3, flex: '1 1 300px', minWidth: 300 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              تنظیمات پیشرفته
            </Typography>

            <FormControlLabel
              control={<Switch checked />}
              label="فعال کردن حالت آزمایشی"
              sx={{ display: 'block', mb: 1 }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              فعال کردن ویژگی‌های آزمایشی برای تست امکانات جدید
            </Typography>

            <FormControlLabel
              control={<Switch />}
              label="گزارش خطا خودکار"
              sx={{ display: 'block', mb: 1 }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              ارسال خودکار خطاها به تیم توسعه برای بررسی
            </Typography>

            <FormControlLabel
              control={<Switch checked />}
              label="نمایش نوتیفیکیشن‌های دسکتاپ"
              sx={{ display: 'block' }}
            />
            <Typography variant="body2" color="text.secondary">
              نمایش اعلان‌ها مستقیم روی دسکتاپ شما
            </Typography>
          </Card>
        </Box>
      </Box>
    </PageWrapper>
  )
}
