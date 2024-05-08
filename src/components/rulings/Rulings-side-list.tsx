import Link from 'next/link'
import styles from './Rulings-side-list.module.css'
import allRulings from '@/actions/all-rulings'

export default async function RulingsSideList() {
  const { data } = await allRulings()

  return (
    <div className={styles.sideMenu}>
      <Link href={'/'} className={styles.logo}>
        <h1>SIRCE-JUD</h1>
      </Link>
      <div className={styles.searchBar}>
        <input type="text" />
      </div>
      <ul className={styles.rulingsList}>
        <li className={`active`}>
          <Link href={`/rulings/123`}>Agravo Interno</Link>
        </li>
        {data?.length &&
          data.map(ruling => (
            <li key={ruling.id}>
              <Link href={`/rulings/${ruling.id}`}>{ruling.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
