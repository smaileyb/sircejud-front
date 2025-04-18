'use server'

import { RulingsGET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'

export interface IRuling {
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
        revalidate: 60,
        tags: ['ruling']
      }
    })

    if (!response.ok)
      throw new Error('Erro na busca dos entendimentos no banco de dados.')
    const data = (await response.json()) as IRuling[]

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
