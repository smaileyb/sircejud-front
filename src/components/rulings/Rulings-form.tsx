'use client'

import ErrorMessage from '../helper/error-message'

import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'
import styles from './Rulings-form.module.css'
import { Ruling } from '@/actions/ruling-by-id'
import rulingUpdate from '@/actions/ruling-put'
import rulingNew from '@/actions/ruling-post'
import { useRouter } from 'next/navigation'
import Editor from '../editor/Editor'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

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
    if (state.ok && newRegister) window.location.href = `/dashboard/rulings/`
    if (state.ok && !newRegister)
      window.location.href = `/dashboard/rulings/${id}`
  }, [state.ok, id, newRegister])

  const router = useRouter()

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
        <Label htmlFor="title" className={styles.label}>
          Título
        </Label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          className="mb-4"
        />
        <input type="hidden" name="id" id="id" value={id} />
        <input name="content" value={content} type="hidden" />
        <Label htmlFor="content" className={styles.label}>
          Conteúdo
        </Label>
        <Editor
          className=""
          name="content"
          value={content}
          onChange={setContent}
        />
        <ErrorMessage error={state.error} />
        <div className="flex mt-4">
          <FormButton newRegister={newRegister} />
          <Button onClick={() => router.back()}>Cancelar</Button>
        </div>
      </form>
    </div>
  )
}
