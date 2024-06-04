'use server'

import { TopicDELETE } from '@/functions/api'
import apiError from '@/functions/api-error'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export default async function topicDelete(id: string) {
  const token = cookies().get('token')?.value

  try {
    if (!token) throw new Error('Token Inválido!')

    const { url } = TopicDELETE(id)
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!response.ok) throw new Error('Erro ao deletar o tópico indicado.')
    revalidateTag('ruling')
  } catch (error: unknown) {
    return apiError(error)
  }
}
