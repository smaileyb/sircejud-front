import RulingsSideList from '@/components/rulings/Rulings-side-list'
import { ReactNode } from 'react'
import styles from './rulings.module.css'

export default async function RulingsLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <section className={styles.rulings}>
      <RulingsSideList />
      {children}
    </section>
  )
}
