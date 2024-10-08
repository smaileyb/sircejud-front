import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { fonaje } from '@/constants/enunciados-fonaje'
import React from 'react'

const FonajePage = () => {
  return (
    <ScrollArea>
      {fonaje.map((enunciado, index) => (
        <p key={index} className="text-lg py-2">
          <span className="font-semibold">{enunciado.title}</span> -{' '}
          {enunciado.content}
        </p>
      ))}
      <ScrollBar />
    </ScrollArea>
  )
}

export default FonajePage
