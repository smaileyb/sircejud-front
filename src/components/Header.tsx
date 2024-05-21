import Link from 'next/link'
import styles from './Header.module.css'
import loggedUser from '@/actions/current-user'
import LoggedUser from './helper/Logged-user'

export default async function Header() {
  const { data } = await loggedUser()

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <Link href={'/'}>
          <h1>SIRCE-JUD</h1>
        </Link>

        <div className={styles.rightMenu}>
          {data ? (
            <LoggedUser name={data.name} />
          ) : (
            <Link className={styles.login} href={'/'}>
              Login / Registro
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
