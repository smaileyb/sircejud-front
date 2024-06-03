'use client'

import { Topic } from '@/actions/ruling-by-id'
import styles from './Topics-list.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { AddIcon } from '@/icons/add-icon'
import EditIcon from '@/icons/edit-icon'
import RulingDeleteButton from '../rulings/Rulings-delete'

export default function TopicsList({
  topics,
  rulingId
}: {
  topics: Topic[]
  rulingId: string
}) {
  const [currentTopic, setCurrentTopic] = useState(0)

  function getTopicContent(id: number) {
    if (topics) {
      const filteredTopic = topics.filter(topic => topic.id === id)
      return filteredTopic[0]
    }
    return {
      title: 'Tópico não encontrado.',
      content: 'Tópico não encontrado.'
    }
  }

  return (
    <div className={styles.topicsGeneral}>
      <ul className={styles.topicsList}>
        <Link
          href={`/rulings/${rulingId}/topic/new`}
          className={styles.addButton}
        >
          <AddIcon />
          Novo tópico
        </Link>
        {topics && topics.length > 0 ? (
          topics?.map(topic => (
            <li key={topic.id} className={styles.topicsListItem}>
              <button onClick={() => setCurrentTopic(topic.id)}>
                {topic.title}
              </button>
            </li>
          ))
        ) : (
          <p> Ainda não há tópicos cadastrados neste entendimento.</p>
        )}
      </ul>
      {currentTopic !== 0 ? (
        <div className={styles.topicContainer}>
          <div className={styles.topicTitle}>
            <h2 className="animeLeft">
              {currentTopic !== 0
                ? getTopicContent(currentTopic).title
                : `Selecione um tópico`}
            </h2>
            <div className={`${styles.iconsContainer} animeLeft`}>
              <Link
                href={`/rulings/${rulingId}/topic/${currentTopic}/edit`}
                className={`${styles.icon}`}
                aria-label="Editar"
              >
                <EditIcon />
              </Link>
              <RulingDeleteButton id={rulingId} />
            </div>
          </div>
          <div className={styles.topicContent}>
            <p className="animeLeft">
              {currentTopic !== 0
                ? getTopicContent(currentTopic).content
                : `Selecione um tópico`}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
