'use client'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import Button from '../forms/button'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'
import styles from './Rulings-form.module.css'
import { Ruling } from '@/actions/ruling-by-id'
import rulingUpdate from '@/actions/ruling-put'
import rulingNew from '@/actions/ruling-post'

function FormButton({ newRegister }: { newRegister?: boolean }) {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled={pending}>
          {newRegister ? `Cadastrando..` : `Atualizando..`}
        </Button>
      ) : (
        <Button>{newRegister ? `Cadastrar` : `Atualizar`}</Button>
      )}
    </>
  )
}

export default function RulingsForm({
  id,
  currentData,
  newRegister
}: {
  id?: string
  currentData?: Ruling | null
  newRegister?: boolean
}) {
  const serverAction = newRegister ? rulingNew : rulingUpdate

  const [state, action] = useFormState(serverAction, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok && newRegister) window.location.href = `/rulings/`
    if (state.ok && !newRegister) window.location.href = `/rulings/${id}`
  }, [state.ok, id, newRegister])

  const [title, setTitle] = useState(currentData?.title)
  const [content, setContent] = useState(currentData?.content)
  return (
    <div className={styles.formContainer}>
      <form action={action} className={styles.form}>
        {newRegister ? (
          <h1>Informe os dados do novo entendimento que quer cadastrar:</h1>
        ) : (
          <h1>Faça a edição do entendimento selecionado:</h1>
        )}

        <Input
          label="Título"
          name="title"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input type="hidden" name="id" id="id" value={id} />
        <label htmlFor="content" className={styles.label}>
          Conteúdo
        </label>
        <textarea
          name="content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <ErrorMessage error={state.error} />

        <FormButton newRegister={newRegister} />
      </form>
    </div>
  )
}
