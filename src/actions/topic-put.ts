'use server'

import { TopicUPDATE } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { Topic } from './ruling-by-id'

export default async function topicUpdate(state: {}, formData: FormData) {
  const title = formData.get('title') as string | null
  const content = formData.get('content') as string | null
  const topicId = formData.get('topicId') as string

  try {
    if (!title || !content) throw new Error('Preencha os dados!')
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = TopicUPDATE(topicId)
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    })

    if (!response.ok)
      throw new Error('Não foi possível editar o tópico indicado.')
    revalidateTag('ruling')
    const data = (await response.json()) as Topic

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
