'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ErrorMessage from '../helper/error-message'
import { useEffect, useState } from 'react'
import { CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button className="mt-4" disabled={pending}>
          Verificando..
        </Button>
      ) : (
        <Button className="mt-4">Verificar</Button>
      )}
    </>
  )
}

const EmailCheckSignUp = () => {
  const [validEmail, setValidEmail] = useState(false)
  const formStateAction = validEmail ? register : emailCheck
  // TODO - implementar server actions para checagem do e-mail (se está na lista) e registrar dados do novo usuário

  const [state, action] = useFormState(formStateAction, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) {
      // Talvez alterar um estado se a verificação for positiva e com isso abrir um dialog box pro preenchimento dos demais dados?
      setValidEmail(true)
    }
  }, [state.ok])
  return (
    <>
      <CardHeader>
        <CardTitle>SIRCE-JUD | Cadastro </CardTitle>
        <CardDescription>
          O SIRCE-JUD é um sistema de cadastro restrito, acessível somente para
          usuários previamente autorizados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" />
            </div>
            <div
              className={`${
                validEmail ? 'flex flex-col space-y-1.5' : 'hidden'
              }`}
            >
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" />
              <Label htmlFor="password">Senha</Label>
              <Input id="password" name="password" />
            </div>
          </div>
          <ErrorMessage error={state.error} />
          <FormButton />
        </form>
      </CardContent>
    </>
  )
}

export default EmailCheckSignUp
