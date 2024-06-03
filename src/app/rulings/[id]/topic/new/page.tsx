import TopicsForm from '@/components/topics/Topics-form'

type ParamsType = {
  params: {
    id: string
  }
}

export default async function NewTopic({ params }: ParamsType) {
  return <TopicsForm newRegister rulingId={params.id} />
}
