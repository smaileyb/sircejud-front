'use server'

import { UserDataUpdate } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'
import loggedUser, { IUser } from './current-user'
import logout from './logout'

export default async function userUpdate(state: {}, formData: FormData) {
  let name = formData.get('name') as string | null
  let email = formData.get('email') as string | null

  const currentUser = (await loggedUser()).data

  try {
    if (currentUser && !name) name = currentUser.name
    if (currentUser && !email) email = currentUser.email
    if (!name && !email)
      throw new Error('Indique pelo menos um dado que queira alterar.')
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = UserDataUpdate()
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })

    if (!response.ok)
      throw new Error('Não foi possível alterar os dados conforme solicitado.')
    const data = (await response.json()) as IUser

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  } finally {
    if (currentUser && email !== currentUser.email) {
      await logout()
    }
  }
}
