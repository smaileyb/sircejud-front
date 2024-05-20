import type { Metadata } from 'next'
import './globals.css'
import { font_primary } from '@/functions/fonts'

export const metadata: Metadata = {
  title: 'SIRCE-JUD',
  description:
    'Sistema Interno de Registro e Consulta de Entendimentos Judiciais'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={font_primary.variable}>
        <div className="App">
          <main className="AppBody">{children}</main>
          {/* Footer */}
        </div>
      </body>
    </html>
  )
}
