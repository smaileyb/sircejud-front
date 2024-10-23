'use server'

import { AuthLogin } from '@/functions/api'
import apiError from '@/functions/api-error'

import { cookies } from 'next/headers'

export default async function login(state: {}, formData: FormData) {
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null
  try {
    if (!email || !password) throw new Error('Preencha os dados!')
    const { url } = AuthLogin()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()

    if (!response.ok) throw new Error(data.message)

    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24
    })
    return { data: null, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
