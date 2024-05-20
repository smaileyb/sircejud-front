import Link from 'next/link'
import styles from './Header.module.css'

export default async function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <Link href={'/'}>
          <h1>SIRCE-JUD</h1>
        </Link>

        <div className={styles.rightMenu}>
          <Link className={styles.login} href={'/login'}>
            Login / Registro
          </Link>
          <Link className={styles.login} href={'/contact'}>
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}
