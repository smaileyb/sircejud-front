'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function StatementLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const getCurrentStatement = () => {
    if (pathname.includes('fonaje')) return ' - FONAJE'
    if (pathname.includes('tjpr')) return ' - Turmas Recursais TJPR'
    return ''
  }

  return (
    <>
      <section className="flex flex-col bg-zinc-900 text-zinc-100 h-full mx-8">
        <div className="flex w-full my-8 gap-8">
          <Link href={'/dashboard/statements/fonaje'}>
            <Button variant={'secondary'} className="text-lg py-6 px-8">
              FONAJE
            </Button>
          </Link>
          <Link href={'/dashboard/statements/tjpr'}>
            <Button variant={'secondary'} className="text-lg py-6 px-8">
              TURMAS RECURSAIS
            </Button>
          </Link>
        </div>
        <Card
          className={`p-4 w-full h-full flex flex-col mb-8 overflow-y-hidden`}
        >
          <CardHeader className="border-b text-zinc-700 mb-6">
            <CardTitle className="text-2xl font-bold">
              Enunciados{getCurrentStatement()}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 overflow-y-scroll scroll-light">
            {children}
          </CardContent>
        </Card>
      </section>
    </>
  )
}
