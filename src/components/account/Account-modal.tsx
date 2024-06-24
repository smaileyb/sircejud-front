'use client'
import { useRouter } from 'next/router'
import styles from './Account-modal.module.css'
import AccountMain from './Account-main'

export default function AccountModal() {
  const router = useRouter()

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back()
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <AccountMain />
    </div>
  )
}
