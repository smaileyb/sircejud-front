'use server'

import { CurrentUser } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'

export interface IUser {
  id: number
  name: string
  email: string
  password: string
}

export default async function loggedUser() {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = CurrentUser()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!response.ok) throw new Error('Erro na identificação do usuário.')
    const data = (await response.json()) as IUser

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
