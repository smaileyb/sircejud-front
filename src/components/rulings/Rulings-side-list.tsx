'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IRuling } from './../../actions/all-rulings'
import { AddIcon } from '@/icons/add-icon'
import { ChangeEvent, useState } from 'react'
import { SearchIcon } from '@/icons/search-icon'
import styles from './Rulings-side-list.module.css'

export default function RulingsSideList({ data }: { data: IRuling[] | null }) {
  const [search, setSearch] = useState('')
  const pathname = usePathname()

  function obtainingListData(): IRuling[] {
    if (data && data.length) {
      const sortedData = data.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        return 0
      })

      const filteredData = sortedData.filter(
        ruling =>
          ruling.title.toLowerCase().includes(search.toLowerCase()) ||
          ruling.content.toLowerCase().includes(search.toLowerCase())
      )
      return filteredData
    } else {
      return []
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    obtainingListData()
  }

  return (
    <div className={styles.sideMenu}>
      <h2 className={styles.logo}>ENTENDIMENTOS</h2>
      <div className={styles.searchBar}>
        <SearchIcon />
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Pesquise aqui.."
        />
      </div>
      <Link href="/rulings/new" className={styles.addButton}>
        <AddIcon />
        Novo entendimento
      </Link>
      <ul className={styles.rulingsList}>
        {obtainingListData().map(ruling => (
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
