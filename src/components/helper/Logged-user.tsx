'use client'
import logout from '@/actions/logout'
import { UserIcon } from '@/icons/user-icon'
import styles from './Logged-user.module.css'
import { LogoutIcon } from '@/icons/logout-icon'
import Link from 'next/link'

export default function LoggedUser({ name }: { name: string }) {
  async function handleLogout() {
    await logout()
  }

  return (
    <div className={styles.loggedUserContainer}>
      <UserIcon />
      <Link href={`/rulings/account`} className={styles.user}>
        {name}
      </Link>
      <button className={styles.logoutButton} onClick={handleLogout}>
        <LogoutIcon />
      </button>
    </div>
  )
}
