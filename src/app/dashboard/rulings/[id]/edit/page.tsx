import ruling from '@/actions/ruling-by-id'
import RulingsForm from '@/components/rulings/Rulings-form'

type ParamsType = {
  params: {
    id: string
  }
}

export default async function UpdateRulingPage({ params }: ParamsType) {
  const { data: currentRuling } = await ruling(params.id)
  return (
    <>
      <RulingsForm id={params.id} currentData={currentRuling} />
    </>
  )
}
