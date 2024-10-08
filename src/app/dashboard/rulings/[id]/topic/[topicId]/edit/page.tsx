import ruling from '@/actions/ruling-by-id'
import TopicsForm from '@/components/topics/Topics-form'

type ParamsType = {
  params: {
    id: string
    topicId: string
  }
}

export default async function EditTopic({ params }: ParamsType) {
  const { data: currentRuling } = await ruling(params.id)

  const currentTopic = currentRuling?.Topics.filter(
    topic => topic.id === Number(params.topicId)
  )[0]

  return (
    <TopicsForm
      rulingId={params.id}
      topicId={params.topicId}
      currentData={currentTopic}
    />
  )
}
