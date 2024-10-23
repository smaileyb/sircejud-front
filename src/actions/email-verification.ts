'use server'

import { EmailVerification } from '@/functions/api'
import apiError from '@/functions/api-error'

export default async function emailVerification(state: {}, formData: FormData) {
  const email = formData.get('email') as string | null

  try {
    if (!email)
      throw new Error('Informe seu e-mail cadastrado junto ao administrador!')
    const { url } = EmailVerification()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message)

    return { data: null, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
