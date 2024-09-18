'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollText, BookOpen, FileText, GavelIcon, ChevronLeft, ChevronRight, Settings, User, LogOut } from 'lucide-react'

export function CollapsibleSideMenu() {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { icon: <ScrollText className="h-5 w-5" />, text: 'Entendimentos' },
    { icon: <BookOpen className="h-5 w-5" />, text: 'Enunciados' },
    { icon: <FileText className="h-5 w-5" />, text: 'Documentos' },
    { icon: <GavelIcon className="h-5 w-5" />, text: 'Jurisprudência' },
  ]

  const bottomMenuItems = [
    { icon: <Settings className="h-5 w-5" />, text: 'Configurações' },
    { icon: <User className="h-5 w-5" />, text: 'Usuário' },
  ]

  return (
    <div className={`flex flex-col h-screen bg-gray-100 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-4">
          <div className={`flex items-center ${isOpen ? '' : 'justify-center w-full'}`}>
            <span className="font-bold text-lg text-primary">
              {isOpen ? 'SIRCE-JUD' : 'SJ'}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Collapse menu' : 'Expand menu'}
            className="hover:bg-gray-200 transition-colors duration-200"
          >
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
        <div className="h-px bg-gray-300 mx-4 my-2" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-start hover:bg-gray-200 transition-all duration-200 ${isOpen ? 'px-4' : 'px-2'}`}
              >
                <div className="group">
                  {React.cloneElement(item.icon, {
                    className: `h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                      isOpen ? 'group-hover:text-primary' : 'group-hover:text-primary'
                    }`
                  })}
                </div>
                {isOpen && <span className="ml-4 group-hover:text-primary">{item.text}</span>}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="h-px bg-gray-300 mx-4 my-2" />
        <ul className="space-y-2 px-2 mb-4">
          {bottomMenuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-start hover:bg-gray-200 transition-all duration-200 ${isOpen ? 'px-4' : 'px-2'}`}
              >
                <div className="group">
                  {React.cloneElement(item.icon, {
                    className: `h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                      isOpen ? 'group-hover:text-primary' : 'group-hover:text-primary'
                    }`
                  })}
                </div>
                {isOpen && <span className="ml-4 group-hover:text-primary">{item.text}</span>}
              </Button>
            </li>
          ))}
          <li>
            <Button
              variant="ghost"
              className={`w-full justify-start hover:bg-gray-200 transition-all duration-200 ${isOpen ? 'px-4' : 'px-2'}`}
            >
              <div className="group">
                <LogOut className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                  isOpen ? 'group-hover:text-primary' : 'group-hover:text-primary'
                }`} />
              </div>
              {isOpen && <span className="ml-4 group-hover:text-primary">Sair</span>}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}