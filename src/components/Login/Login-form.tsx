'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Button from '@/components/forms/button'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import { useEffect } from 'react'
import Link from 'next/link'
import styles from './Login-form.module.css'
import login from '@/actions/login'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando..</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  )
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) {
      window.location.href = '/rulings'
    }
  }, [state.ok])

  return (
    <div className={styles.formContainer}>
      <form action={action} className={styles.form}>
        <h1>Faça login para acessar os serviços:</h1>
        <Input label="E-mail" name="email" type="text" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
        <Link href={`/login/lost`} className={styles.lost}>
          Perdeu a senha?
        </Link>
      </form>
    </div>
  )
}
