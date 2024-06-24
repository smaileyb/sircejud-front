'use client'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import Button from '../forms/button'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'
import styles from './Account-info-form.module.css'
import userUpdate from '@/actions/user-data-update'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Atualizando..</Button>
      ) : (
        <Button>Atualizar</Button>
      )}
    </>
  )
}

export default function AccountInfoForm() {
  const [state, action] = useFormState(userUpdate, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) window.location.href = `/rulings/`
  }, [state.ok])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className={styles.formContainer}>
      <form action={action} className={styles.form}>
        <h1>Informe os novos dados de usuário:</h1>
        <Input
          label="Nome"
          name="name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <span className={styles.emailAlert}>
          * Com a alteração do e-mail será necessária a realização de novo
          login.
        </span>
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </div>
  )
}
