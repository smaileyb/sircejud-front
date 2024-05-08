'use server'

import { RulingsGET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'

export interface Ruling {
  id: number
  title: string
  content: string
  User: {
    name: string
  }
}

export default async function allRulings() {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = RulingsGET()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      next: {
        revalidate: 60
      }
    })

    if (!response.ok)
      throw new Error('Erro na busca dos entendimentos no banco de dados.')
    const data = (await response.json()) as Ruling[]

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
