'use server'

import { RulingGET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'

export interface Topic {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export interface Ruling {
  id: number
  title: string
  content: string | undefined
  Topics: Topic[]
  User: {
    name: string
  }
  createdAt: string
  updatedAt: string
}

export default async function ruling(id: string) {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = RulingGET(id)
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
    const data = (await response.json()) as Ruling

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
