import LoginForm from '@/components/Login/Login-form'
import Sign from '@/components/sign/Sign'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-full h-full grid lg:h-full lg:grid-cols-2 animeLeft">
      <div className="flex items-center justify-center py-12 bg-zinc-800">
        <Link href={'/'} className="text-5xl text-white font-bold">
          <h1>SIRCE-JUD</h1>
        </Link>
      </div>
      <Sign />
    </section>
  )
}
