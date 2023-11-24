import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Issy-les-Moulineaux',
  description: 'Gestion de la data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
