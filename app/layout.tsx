import { Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Potfolio',
  description: 'This app is use for showcasing my projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
           {children}
      </body>
    </html>
  )
}
