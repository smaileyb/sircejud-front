'use server'

import { AuthRegister } from '@/functions/api'
import apiError from '@/functions/api-error'

export default async function register(state: {}, formData: FormData) {
  const email = formData.get('email') as string | null
  const name = formData.get('name') as string | null
  const password = formData.get('password') as string | null
  try {
    if (!email || !password || !name) throw new Error('Preencha os dados!')
    const { url } = AuthRegister()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })

    if (!response.ok)
      throw new Error('Erro no processo de registro do usuário.')
    return { data: null, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
