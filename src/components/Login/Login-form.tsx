'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ErrorMessage from '../helper/error-message'
import { useEffect } from 'react'
import login from '@/actions/login'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Label } from '../ui/label'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button className="mt-4" disabled={pending}>
          Enviando..
        </Button>
      ) : (
        <Button className="mt-4">Entrar</Button>
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
      window.location.href = '/dashboard'
    }
  }, [state.ok])

  // return (
  //   <div className={`${styles.formContainer} flex items-center justify-center`}>
  //     <form action={action} className={styles.form}>
  //       <h1>Faça login para acessar os serviços:</h1>
  //       <Input label="E-mail" name="email" type="text" />
  //       <Input label="Senha" name="password" type="password" />
  //       <ErrorMessage error={state.error} />
  //       <FormButton />
  //       {/* <Link href={`/login/lost`} className={styles.lost}>
  //         Perdeu a senha?
  //       </Link> */}
  //     </form>
  //   </div>
  // )
  return (
    <>
      {/* Transformar o atual componente em uma moldura genérica, extraindo a funcionalidade de login para outro componente. Criar um componente específico para lidar com a criação de uma nova conta. Implementar, aqui, uma lógica para avaliar se a pessoa pretende fazer login ou criar um novo usuário e renderizar o componente de acordo, usando valores armazenados em um estado */}
      <CardHeader>
        <CardTitle>SIRCE-JUD | LOGIN </CardTitle>
        <CardDescription>Faça login para acessar os serviços</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" name="password" type="password" />
            </div>
          </div>
          <ErrorMessage error={state.error} />
          <FormButton />
        </form>
      </CardContent>
    </>
  )
}

// TODO Clean-up the component and implement a sign-up page
