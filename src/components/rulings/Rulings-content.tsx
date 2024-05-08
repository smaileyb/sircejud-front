import ruling from '@/actions/rulling-by-id'
import styles from './Rulings-content.module.css'

export default async function RulingsContent({ id }: { id: string }) {
  const { data } = await ruling(id)

  return (
    <section className={styles.content}>
      <div className={styles.titleContainer}>
        {!data ? (
          <h1>Clique no entendimento que deseja visualizar</h1>
        ) : (
          <h1>{data.title}</h1>
        )}
      </div>
      <div className={styles.contentContainer}>
        <p>{data?.content}</p>
      </div>
    </section>
  )
}
