import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

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
      <body>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          {/* Footer */}
        </div>
      </body>
    </html>
  )
}
