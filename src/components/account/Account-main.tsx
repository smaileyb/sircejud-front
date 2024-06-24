import loggedUser from '@/actions/current-user'
import styles from './Account-main.module.css'
import Link from 'next/link'
import { PasswordIcon } from '@/icons/password-icon'
import { DataIcon } from '@/icons/data-icon'

export default async function AccountMain() {
  const { data } = await loggedUser()
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="animeLeft">Dados do usuário: </h1>
      </div>
      <div className={styles.contentContainer}>
        <p className="animeLeft">
          NOME: <span>{data?.name}</span>
        </p>
        <p className="animeLeft">
          E-MAIL: <span>{data?.email}</span>
        </p>
      </div>
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
    </section>
  )
}
