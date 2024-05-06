import Link from 'next/link'
import styles from './Header.module.css'

export default async function Header() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href={'/'}>
          <h1>SIRCE-JUD</h1>
        </Link>

        <Link className={styles.login} href={'/login'}>
          Login / Criar
        </Link>
      </nav>
    </header>
  )
}
