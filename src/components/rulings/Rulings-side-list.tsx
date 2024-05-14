'use client'
import Link from 'next/link'
import styles from './Rulings-side-list.module.css'
import { usePathname } from 'next/navigation'
import { IRuling } from './../../actions/all-rulings'
import { AddIcon } from '@/icons/add-icon'

export default function RulingsSideList({ data }: { data: IRuling[] | null }) {
  const pathname = usePathname()

  return (
    <div className={styles.sideMenu}>
      <Link href={'/'} className={styles.logo}>
        <h1>SIRCE-JUD</h1>
      </Link>
      <div className={styles.searchBar}>
        <input type="text" />
      </div>
      <Link href="/rulings/new" className={styles.addButton}>
        <AddIcon />
        Novo entendimento
      </Link>
      <ul className={styles.rulingsList}>
        {data?.length &&
          data
            .sort((a, b) => {
              if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
              if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
              return 0
            })
            .map(ruling => (
              <li
                key={ruling.id}
                className={pathname === `/rulings/${ruling.id}` ? 'active' : ''}
              >
                <Link href={`/rulings/${ruling.id}`}>{ruling.title}</Link>
              </li>
            ))}
      </ul>
    </div>
  )
}
