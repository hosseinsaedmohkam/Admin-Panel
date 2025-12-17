'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export default function UsersTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

 useEffect(() => {
  fetch("https://69316c5111a8738467cebd0a.mockapi.io/Admin-Panel")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error("Error fetching users:", err))
    .finally(() => setLoading(false))
}, [])


  if (loading) return <p>در حال بارگذاری کاربران...</p>

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>نام</TableCell>
            <TableCell>ایمیل</TableCell>
            <TableCell>نقش</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
