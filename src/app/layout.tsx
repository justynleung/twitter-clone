'use client'
import ReduxProviders from '&/redux/provider'
import ThemeProviders from '&/components/theme-provider'
import { SessionProvider } from 'next-auth/react';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProviders>
          <ThemeProviders>
            <SessionProvider>
              {children}
            </SessionProvider>
          </ThemeProviders>
        </ReduxProviders>
      </body>
    </html>
  )
}
