import loggedUser from '@/actions/current-user'
import styles from './Account-main.module.css'
import Link from 'next/link'
import { PasswordIcon } from '@/icons/password-icon'
import { DataIcon } from '@/icons/data-icon'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default async function AccountMain() {
  const { data } = await loggedUser()
  return (
    <div className="flex bg-zinc-900 text-zinc-100 h-full">
      <Card className={`m-8 p-4 w-full flex flex-col`}>
        <CardHeader className="border-b text-zinc-700 mb-6">
          <CardTitle className="text-2xl font-bold">
            Perfil do Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 mb-16">
          <div className="flex flex-col gap-4 justify-center">
            <p className="text-xl font-semibold animeLeft">
              NOME:{' '}
              <span className="text-zinc-500 font-normal">{data?.name}</span>
            </p>
            <p className="text-xl font-semibold animeLeft">
              E-MAIL:{' '}
              <span className="text-zinc-500 font-normal">{data?.email}</span>
            </p>
          </div>
        </CardContent>

        <div className={styles.buttonContainer}>
          <Link href={`account/new-info`} className={styles.button}>
            <DataIcon />
            Alterar dados pessoais
          </Link>
          <Link href={`account/password`} className={styles.button}>
            <PasswordIcon />
            Alterar senha
          </Link>
        </div>
      </Card>
    </div>
  )
}
