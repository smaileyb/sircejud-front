import type { Metadata } from 'next'
import './globals.css'

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
          <main className="AppBody">{children}</main>
          {/* Footer */}
        </div>
      </body>
    </html>
  )
}
