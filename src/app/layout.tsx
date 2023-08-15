import ReduxProviders from '&/redux/provider'
import ThemeProviders from '&/context/ThemeProvider'
import AuthContext from '&/context/AuthContext';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          <ThemeProviders>
            {children}
          </ThemeProviders>
        </ReduxProviders>
      </body>
    </html>
  )
}
