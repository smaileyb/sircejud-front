'use client'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import Button from '../forms/button'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'
import styles from '../rulings/Rulings-form.module.css'
import { Topic } from '@/actions/ruling-by-id'
import topicNew from '@/actions/topic-post'
import topicUpdate from '@/actions/topic-put'
import { useRouter } from 'next/navigation'

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

export default function TopicsForm({
  rulingId,
  topicId,
  currentData,
  newRegister
}: {
  rulingId?: string
  topicId?: string
  currentData?: Topic | null
  newRegister?: boolean
}) {
  const serverAction = newRegister ? topicNew : topicUpdate

  const [state, action] = useFormState(serverAction, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) window.location.href = `/rulings/${rulingId}`
  }, [state.ok, rulingId])

  const router = useRouter()

  const [title, setTitle] = useState(currentData?.title)
  const [content, setContent] = useState(currentData?.content)
  return (
    <div className={styles.formContainer}>
      <form action={action} className={styles.form}>
        {newRegister ? (
          <h1>Informe os dados do novo tópico que quer cadastrar:</h1>
        ) : (
          <h1>Faça a edição do tópico selecionado:</h1>
        )}

        <Input
          label="Título"
          name="title"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="hidden"
          name={newRegister ? 'rulingId' : 'topicId'}
          id={newRegister ? 'rulingId' : 'topicId'}
          value={newRegister ? rulingId : topicId}
        />
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
        <Button onClick={() => router.back()}>Cancelar</Button>
      </form>
    </div>
  )
}
