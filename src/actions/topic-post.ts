'use server'

import { TopicPOST } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { Topic } from './ruling-by-id'

export default async function topicNew(state: {}, formData: FormData) {
  const rulingId = formData.get('rulingId') as string | null
  const title = formData.get('title') as string | null
  const content = formData.get('content') as string | null

  try {
    if (!title || !content || !rulingId) throw new Error('Preencha os dados!')
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = TopicPOST(rulingId)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    })

    if (!response.ok)
      throw new Error(
        'Não foi possível registrar o tópico indicado. Verifique se já não há outro item com o mesmo título.'
      )
    revalidateTag('ruling')
    const data = (await response.json()) as Topic

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
