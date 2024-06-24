'use client'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import Button from '../forms/button'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'
import styles from './Account-info-form.module.css'
import userPasswordUpdate from '@/actions/user-password-update'
import logout from '@/actions/logout'
import { useRouter } from 'next/navigation'

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

export default function AccountPasswordForm() {
  const [state, action] = useFormState(userPasswordUpdate, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    async function passwordChange() {
      await logout()
    }

    if (state.ok) passwordChange()
  }, [state.ok])

  const router = useRouter()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  return (
    <div className={styles.formContainer}>
      <form action={action} className={styles.form}>
        <h1>Informe os novos dados de usuário:</h1>
        <Input
          label="Senha atual"
          name="currentPassword"
          type="password"
          value={currentPassword}
          onChange={({ target }) => setCurrentPassword(target.value)}
        />
        <Input
          label="Nova Senha"
          name="newPassword"
          type="password"
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
        />
        <span className={styles.emailAlert}>
          * Com a alteração da senha, será necessário novo login.
        </span>
        <ErrorMessage error={state.error} />
        <FormButton />
        <Button onClick={() => router.back()}>Cancelar</Button>
      </form>
    </div>
  )
}
