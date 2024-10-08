import RulingsSideList from '@/components/rulings/Rulings-side-list'
import { ReactNode } from 'react'
import allRulings from '@/actions/all-rulings'
// import Header from '@/components/Header'

export default async function RulingsLayout({
  children
}: {
  children: ReactNode
}) {
  const { data } = await allRulings()
  return (
    <div className="bg-zinc-900 text-zinc-100">
      {/* <Header /> */}
      <section className="h-screen bg-zinc-900 text-zinc-100 grid grid-cols-[1fr_3fr]">
        <RulingsSideList data={data} />
        {children}
      </section>
    </div>
  )
}
