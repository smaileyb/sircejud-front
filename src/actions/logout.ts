'use server'

import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function logout() {
  try {
    cookies().delete('token')
  } catch (error: unknown) {
    return apiError(error)
  } finally {
    redirect('/')
  }
}
