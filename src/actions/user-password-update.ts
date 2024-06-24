'use server'

import { UserDataPassword } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'
import loggedUser, { IUser } from './current-user'
import logout from './logout'

export default async function userPasswordUpdate(
  state: {},
  formData: FormData
) {
  let currentPassword = formData.get('currentPassword') as string | null
  let newPassword = formData.get('newPassword') as string | null

  const currentUser = (await loggedUser()).data

  try {
    if (!currentPassword && !newPassword)
      throw new Error('Preencha ambos os campos.')
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Acesso negado.')
    const { url } = UserDataPassword()
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ currentPassword, newPassword })
    })

    if (!response.ok)
      throw new Error('Não foi possível alterar os dados conforme solicitado.')
    const data = (await response.json()) as IUser

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}
