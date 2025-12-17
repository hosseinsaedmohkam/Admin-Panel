'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthGuard({ children }) {
  const router = useRouter()

  //// مشخص می‌کنه کامپوننت روی کلاینت  شده یا نه////

  const [isMounted, setIsMounted] = useState(false)

  //// وضعیت احراز هویت////

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  ////فقط بعد از (کلاینت) اجرا می‌شود/////

  useEffect(() => {
    setIsMounted(true)

    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (!isLoggedIn) {
      router.replace('/')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  // (حل کامل hydration error)////

  if (!isMounted) return null

  // اگر لاگین نیست، چیزی نشان نده (در حال ریدایرکت)////

  if (!isAuthenticated) return null

  return children
}
