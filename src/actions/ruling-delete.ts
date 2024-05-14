'use server'

import { RulingDELETE } from '@/functions/api'
import apiError from '@/functions/api-error'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function rulingDelete(id: string) {
  const token = cookies().get('token')?.value

  try {
    if (!token) throw new Error('Token Inválido!')

    const { url } = RulingDELETE(id)
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!response.ok)
      throw new Error('Erro ao deletar o entendimento indicado.')
  } catch (error: unknown) {
    return apiError(error)
  }
  revalidateTag('ruling')
  redirect('/rulings')
}
