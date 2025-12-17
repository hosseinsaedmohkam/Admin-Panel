'use client'

import { useState } from 'react'
import {
  Box,
  List,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Dialog
} from '@mui/material'
import { Dashboard, People, BarChart, Settings, Logout, Login, Person } from '@mui/icons-material'
import Link from 'next/link'
import RegisterForm from './register'
import HowToReg from '@mui/icons-material/HowToReg';


const authButtons = [
  { title: 'ورود', icon: Login, href: '/login', color: 'primary' },
  { title: 'تنظیمات', icon: Settings, href: '/settings' },
  { title: 'خروج', icon: Logout, href: '/logout', color: 'error' },
]

const sidebarItems = [
  { text: 'داشبورد', icon: Dashboard, href: '/dashboard' },
  { text: 'کاربران', icon: People, href: '/users' },
  { text: 'چارت‌ها', icon: BarChart, href: '/charts' },
  { text: 'پروفایل', icon: Person, href: '/profile' },
]

function SidebarItem({ IconComponent, text, href, open }) {
  return (
    <ListItemButton
      component={Link}
      href={href}
      sx={{
        py: 1.4,
        px: open ? 2 : 1.5,
        justifyContent: open ? 'flex-start' : 'center',
        borderRadius: 2,
        mx: 1,
        '&:hover': { backgroundColor: 'action.hover' },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 1.5 : 0,
          justifyContent: 'center',
          color: 'text.primary',
        }}
      >
        <IconComponent />
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{
          opacity: open ? 1 : 0,
          transition: 'opacity 0.2s',
          whiteSpace: 'nowrap',
        }}
      />
    </ListItemButton>
  )
}

export default function Sidebar({ open }) {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      <Box
        sx={{
          width: open ? 220 : 70,
          transition: '0.3s',
          backgroundColor: 'background.paper',
          borderLeft: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
        }}
      >
        {/* Auth Buttons */}
        <Box
          sx={{
            mt: 2,
            mx: 1.5,
            mb: 2,
            px: 1,
            py: 0.75,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'space-between' : 'center',
            backgroundColor: 'action.hover',
          }}
        >
          {authButtons.map((btn, index) => {
            if (!open && index > 0) return null
            const IconComponent = btn.icon
            return (
              <Tooltip key={btn.title} title={btn.title}>
                <IconButton
                  size="small"
                  component={Link}
                  href={btn.href}
                  color={btn.color || 'default'}
                >
                  <IconComponent fontSize="small" />
                </IconButton>
              </Tooltip>
            )
          })}
        </Box>

        {/* Profile */}
        <Box
          sx={{
            mx: 1.5,
            mb: 2.5,
            p: 3,
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(99,102,241,0.04))',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            src="/hossein.saedmokam.png"
            alt="Hossein Saedmohkam"
            sx={{ width: 62, height: 62, mb: 1.5, boxShadow: '0 8px 22px rgba(0,0,0,0.18)' }}
          />
          {open && (
            <>
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>حسین ساعدمحکم</Typography>
              <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Administrator</Typography>
            </>
          )}
        </Box>

        <Divider />

        {/* Sidebar Items */}
        <List>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.text}
              open={open}
              IconComponent={item.icon}
              text={item.text}
              href={item.href}
            />
          ))}

          {/* گزینه Register */}
        <ListItemButton
  onClick={() => setShowRegister(true)}
  sx={{
    py: 1.4,
    px: open ? 2 : 1.5,
    justifyContent: open ? 'flex-start' : 'center',
    borderRadius: 2,
    mx: 1,
    '&:hover': { backgroundColor: 'action.hover' },
  }}
>
  <ListItemIcon
    sx={{
      minWidth: 0,
      mr: open ? 1.5 : 0,
      justifyContent: 'center',
      color: 'text.primary',
    }}
  >
    <HowToReg />
  </ListItemIcon>
  <ListItemText
    primary="ثبت نام"
    sx={{
      opacity: open ? 1 : 0,
      whiteSpace: 'nowrap',
      transition: 'opacity 0.2s',
    }}
  />
</ListItemButton>

        </List>
      </Box>

      {/* Dialog Register */}
      <Dialog open={showRegister} onClose={() => setShowRegister(false)} keepMounted>
        <RegisterForm onClose={() => setShowRegister(false)} />
      </Dialog>
    </>
  )
}
