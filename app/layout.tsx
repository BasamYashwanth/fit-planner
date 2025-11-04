import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/footer'
import NextAuthProvider from '@/components/auth/NextAuthProvider'

export const metadata: Metadata = {
  title: 'Fit Planner',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
