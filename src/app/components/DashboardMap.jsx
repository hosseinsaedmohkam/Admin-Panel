'use client'

import { Card, Typography, Box } from '@mui/material'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false })
const CircleMarker = dynamic(() => import('react-leaflet').then(m => m.CircleMarker), { ssr: false })
const Tooltip = dynamic(() => import('react-leaflet').then(m => m.Tooltip), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false })

const locations = [
  { id: 'tehran', name: 'تهران', lat: 35.6892, lng: 51.389, visits: 5400, sales: 120 },
  { id: 'newyork', name: 'نیویورک', lat: 40.7128, lng: -74.006, visits: 8000, sales: 200 },
  { id: 'london', name: 'لندن', lat: 51.5074, lng: -0.1278, visits: 7500, sales: 180 },
  { id: 'tokyo', name: 'توکیو', lat: 35.6762, lng: 139.6503, visits: 14000, sales: 400 },
  { id: 'sydney', name: 'سیدنی', lat: -33.8688, lng: 151.2093, visits: 6200, sales: 90 },
]

export default function DashboardMap({ height = 410 }) {
  return (
    <Card sx={{ p: 3, borderRadius: 3, width: '100%' }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        نقشه جهان - بازدید و فروش
      </Typography>

      <Box sx={{ height, borderRadius: 1, overflow: 'hidden' }}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map(loc => (
            <CircleMarker
              key={loc.id}
              center={[loc.lat, loc.lng]}
              radius={Math.sqrt(loc.visits) * 0.08}
              pathOptions={{
                color: loc.sales > 200 ? '#dc3545' : '#4f46e5',
                fillColor: loc.sales > 200 ? '#dc3545' : '#4f46e5',
                fillOpacity: 0.6,
                weight: 2,
              }}
            >
              <Tooltip direction="top" offset={[0, -10]}>
                <div style={{ textAlign: 'right' }}>
                  <strong>{loc.name}</strong>
                  <br />
                  بازدید: {loc.visits.toLocaleString('fa-IR')}
                  <br />
                  فروش: {loc.sales.toLocaleString('fa-IR')}
                </div>
              </Tooltip>
              <Popup>
                <strong>{loc.name}</strong>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </Box>
    </Card>
  )
}
