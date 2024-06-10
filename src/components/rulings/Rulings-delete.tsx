'use client'

import React, { useState } from 'react'
import styles from './Rulings-content.module.css'
import rulingDelete from '@/actions/ruling-delete'
import { DeleteIcon } from '@/icons/delete-icon'

export default function RulingDeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)
  async function handleClick() {
    setLoading(true)

    const confirm = window.confirm(
      'Tem certeza de que deseja deletar este entendimento?'
    )
    if (confirm) {
      await rulingDelete(id)
    }
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <button className={styles.icon} disabled>
          <DeleteIcon />
          Deletar
        </button>
      ) : (
        <button
          className={styles.icon}
          onClick={handleClick}
          title="Deletar entendimento"
        >
          <DeleteIcon />
          Deletar
        </button>
      )}
    </>
  )
}
