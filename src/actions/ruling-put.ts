'use server'

import { RulingUPDATE } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'
import loggedUser from './current-user'
import { revalidateTag } from 'next/cache'

export interface Ruling {
  id: number
  title: string
  content: string
  User: {
    name: string
  }
}

export default async function rulingUpdate(state: {}, formData: FormData) {
  const title = formData.get('title') as string | null
  const content = formData.get('content') as string | null
  const id = formData.get('id') as string
  const userName = (await loggedUser()).data

  try {
    if (!title || !content) throw new Error('Preencha os dados!')
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = RulingUPDATE(id)
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, User: { name: userName } })
    })

    if (!response.ok)
      throw new Error('Não foi possível editar o entendimento indicado.')
    revalidateTag('ruling')
    const data = (await response.json()) as Ruling

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
