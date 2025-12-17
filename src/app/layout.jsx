
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['latin', 'arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Admin Panel',
  description: 'پنل مدیریت',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
