'use client'
import { useState } from 'react'
import { Card, CardFooter } from '../ui/card'
import LoginForm from '../Login/Login-form'
import { Button } from '../ui/button'
import EmailCheckSignUp from '../sign-up/email-check'

const Sign = () => {
  const [signIn, setSignIn] = useState(true)

  return (
    <Card className="self-center justify-self-center m-4 md:m-0 md:w-[500px] lg:min-w-[500px]">
      {signIn ? (
        <>
          <LoginForm />
          <CardFooter className="flex justify-end gap-4">
            <p>Ainda não está registrado? </p>
            <Button
              variant="ghost"
              onClick={currentState => setSignIn(!currentState)}
            >
              Verifique seu e-mail
            </Button>
          </CardFooter>
        </>
      ) : (
        <EmailCheckSignUp />
      )}
    </Card>
  )
}

export default Sign
