'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ScrollText,
  BookOpen,
  FileText,
  GavelIcon,
  Menu,
  Settings,
  User,
  LogOut,
  X
} from 'lucide-react'
import Link from 'next/link'

export function CollapsibleSideMenu() {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    {
      icon: <ScrollText />,
      text: 'Entendimentos',
      href: '/dashboard/rulings'
    },
    {
      icon: <BookOpen />,
      text: 'Enunciados',
      href: '/dashboard/statements'
    },
    {
      icon: <FileText />,
      text: 'Documentos',
      href: '/dashboard/documents'
    },
    {
      icon: <GavelIcon />,
      text: 'Jurisprudência',
      href: '/dashboard/juris-search'
    }
  ]

  const bottomMenuItems = [
    {
      icon: <Settings />,
      text: 'Configurações',
      href: '/dashboard/settings'
    },
    {
      icon: <User />,
      text: 'Usuário',
      href: '/dashboard/account'
    }
  ]

  return (
    <div
      className={`flex flex-col bg-zinc-800 border-r border-zinc-700 text-zinc-100 transition-all  duration-500 ease-linear ${
        isOpen ? 'min-w-72' : 'w-20'
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between py-4 ${
            isOpen ? 'px-6' : 'px-2 gap-2'
          }`}
        >
          <div
            className={`flex items-center ${
              isOpen ? '' : 'justify-center w-full'
            }`}
          >
            <Link
              href={'/dashboard'}
              className={`font-bold text-2xl text-zinc-100 `}
            >
              {isOpen ? 'SIRCE-JUD' : 'SJ'}
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Retrai o menu' : 'Expande o menu'}
            className="hover:bg-zinc-700 text-zinc-100 hover:text-zinc-50 transition-colors duration-200"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        <div className="h-px bg-zinc-700 mx-4 my-2" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2 py-1 flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-zinc-100">
                <Button
                  variant="ghost"
                  className={`w-full justify-start hover:bg-zinc-700 hover:text-zinc-50 transition-all py-6 duration-200 ${
                    isOpen ? 'px-4' : 'px-2'
                  }`}
                >
                  <div
                    className={`group ${
                      !isOpen && 'w-full flex justify-center'
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `h-6 w-6 transition-transform duration-200 group-hover:scale-110 ${
                        isOpen
                          ? 'group-hover:text-zinc-100'
                          : 'group-hover:text-zinc-100'
                      }`
                    })}
                  </div>
                  {isOpen && (
                    <span className="ml-4 group-hover:text-zinc-100 text-sm">
                      {item.text}
                    </span>
                  )}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="h-px bg-zinc-700 mx-4 my-2" />
        <ul className="space-y-2 px-2 mb-4">
          {bottomMenuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-zinc-100">
                <Button
                  variant="ghost"
                  className={`w-full justify-start hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-200 ${
                    isOpen ? 'px-4' : 'px-2'
                  }`}
                >
                  <div
                    className={`group ${
                      !isOpen && 'w-full flex justify-center'
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `h-6 w-6 transition-transform duration-200 group-hover:scale-110 ${
                        isOpen
                          ? 'group-hover:text-zinc-100'
                          : 'group-hover:text-zinc-100'
                      }`
                    })}
                  </div>
                  {isOpen && (
                    <span className="ml-4 group-hover:text-zinc-100">
                      {item.text}
                    </span>
                  )}
                </Button>
              </Link>
            </li>
          ))}
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start hover:bg-zinc-700 hover:text-zinc-50 transition-all duration-200 ${
                isOpen ? 'px-4' : 'px-2'
              }`}
            >
              <div
                className={`group ${!isOpen && 'w-full flex justify-center'}`}
              >
                <LogOut
                  className={`h-6 w-6 transition-transform duration-200 group-hover:scale-110 ${
                    isOpen
                      ? 'group-hover:text-zinc-100'
                      : 'group-hover:text-zinc-100'
                  }`}
                />
              </div>
              {isOpen && (
                <span className="ml-4 group-hover:text-zinc-100">Sair</span>
              )}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}
