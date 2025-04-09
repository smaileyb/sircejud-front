import dynamic from 'next/dynamic'

const RulingsForm = dynamic(() => import('@/components/rulings/Rulings-form'), {
  ssr: false
})

export default function NewRuling() {
  return <RulingsForm newRegister />
}
