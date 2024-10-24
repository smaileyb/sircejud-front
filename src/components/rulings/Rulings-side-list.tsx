'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IRuling } from './../../actions/all-rulings'
import { AddIcon } from '@/icons/add-icon'
import { ChangeEvent, useState } from 'react'
import styles from './Rulings-side-list.module.css'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'

export default function RulingsSideList({ data }: { data: IRuling[] | null }) {
  const [search, setSearch] = useState('')
  const pathname = usePathname()
  console.log(pathname)

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
    <div className="flex flex-col px-4 bg-zinc-900 self-start max-h-screen">
      <div className="relative mt-8 mb-4">
        <Input
          type="text"
          placeholder="Pesquisar entendimentos..."
          value={search}
          onChange={handleInputChange}
          className="pl-10 text-base bg-zinc-700 border-zinc-700 text-zinc-50 placeholder-zinc-100 transition-all"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-300"
          size={18}
        />
      </div>
      {/* <div className={styles.searchBar}>
        <SearchIcon />
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Pesquise aqui.."
        />
      </div> */}
      <Link
        href="/dashboard/rulings/new"
        className="flex items-center justify-center gap-1.5 bg-emerald-600 rounded-md py-4 px-2 hover:bg-emerald-500 text-zinc-100 mb-4 transition duration-300"
      >
        <AddIcon />
        Novo entendimento
      </Link>
      <ScrollArea
        className={`text-sm font-bold flex flex-col h-screen overflow-y-scroll overflow-x-hidden min-w-64 mb-8 ${styles.rulingsList}`}
      >
        {obtainingListData().map(ruling => (
          <li
            key={ruling.id}
            className={` ${
              pathname.includes(ruling.id.toString()) ? 'active' : ''
            }`}
          >
            <Link href={`/dashboard/rulings/${ruling.id}`} className="">
              {ruling.title}
            </Link>
          </li>
        ))}
      </ScrollArea>
    </div>
  )
}
