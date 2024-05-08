import RulingsContent from '@/components/rulings/Rulings-content'

type RulingIdParams = {
  params: {
    id: string
  }
}

export default async function RulingIdPage({ params }: RulingIdParams) {
  return <RulingsContent id={params.id} />
}
