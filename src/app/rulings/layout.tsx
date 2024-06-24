import RulingsSideList from '@/components/rulings/Rulings-side-list'
import { ReactNode } from 'react'
import styles from './rulings.module.css'
import allRulings from '@/actions/all-rulings'
import Header from '@/components/Header'

export default async function RulingsLayout({
  children
}: {
  children: ReactNode
}) {
  const { data } = await allRulings()
  return (
    <main>
      <Header />
      <section className={styles.rulings}>
        <RulingsSideList data={data} />
        {children}
      </section>
    </main>
  )
}
