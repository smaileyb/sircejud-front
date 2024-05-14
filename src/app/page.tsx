import LoginForm from '@/components/Login/Login-form'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="container animeLeft">
      <Link href={'/'} className="mainTitle">
        <h1>SIRCE-JUD</h1>
      </Link>
      <LoginForm />
    </section>
  )
}
