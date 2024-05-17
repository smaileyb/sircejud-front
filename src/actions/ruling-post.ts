'use server'

import { RulingPOST } from '@/functions/api'
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

export default async function rulingNew(state: {}, formData: FormData) {
  const title = formData.get('title') as string | null
  const content = formData.get('content') as string | null
  const userName = (await loggedUser()).data

  try {
    if (!title || !content) throw new Error('Preencha os dados!')
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = RulingPOST()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, User: { name: userName } })
    })

    if (!response.ok)
      throw new Error(
        'Não foi possível registrar o entendimento indicado. Verifique se já não há outro item com o mesmo título.'
      )
    revalidateTag('ruling')
    const data = (await response.json()) as Ruling

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
