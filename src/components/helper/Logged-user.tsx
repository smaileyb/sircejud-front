'use client'
import logout from '@/actions/logout'
import { UserIcon } from '@/icons/user-icon'
import styles from './Logged-user.module.css'
import { LogoutIcon } from '@/icons/logout-icon'

export default function LoggedUser({ name }: { name: string }) {
  async function handleLogout() {
    await logout()
  }

  return (
    <div className={styles.loggedUserContainer}>
      <UserIcon />
      <p className={styles.user}>{name}</p>
      <button className={styles.logoutButton} onClick={handleLogout}>
        <LogoutIcon />
      </button>
    </div>
  )
}
