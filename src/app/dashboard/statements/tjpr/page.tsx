import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  enunciadosPlena,
  enunciadosPrimeira,
  enunciadosQuarta,
  enunciadosTerceira
} from '@/constants/enunciados-tjpr'
import React from 'react'

const TjprPage = () => {
  return (
    <ScrollArea>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center mb-2">
          Enunciados da Primeira Turma Recursal
        </h2>
        {enunciadosPrimeira.map((enunciado, index) => (
          <p key={index} className="text-lg py-2">
            <span className="font-semibold">{enunciado.title}</span> -{' '}
            {enunciado.content}
          </p>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center mb-2">
          Enunciados da Terceira Turma Recursal
        </h2>
        {enunciadosTerceira.map((enunciado, index) => (
          <p key={index} className="text-lg py-2">
            <span className="font-semibold">{enunciado.title}</span> -{' '}
            {enunciado.content}
          </p>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center mb-2">
          Enunciados da Quarta Turma Recursal
        </h2>
        {enunciadosQuarta.map((enunciado, index) => (
          <p key={index} className="text-lg py-2">
            <span className="font-semibold">{enunciado.title}</span> -{' '}
            {enunciado.content}
          </p>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center mb-2">
          Enunciados da Turma Recursal Plena
        </h2>
        {enunciadosPlena.map((enunciado, index) => (
          <p key={index} className="text-lg py-2">
            <span className="font-semibold">{enunciado.title}</span> -{' '}
            {enunciado.content}
          </p>
        ))}
      </div>

      <ScrollBar />
    </ScrollArea>
  )
}

export default TjprPage
