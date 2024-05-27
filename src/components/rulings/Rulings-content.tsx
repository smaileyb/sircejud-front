import ruling from '@/actions/ruling-by-id'
import styles from './Rulings-content.module.css'
import Link from 'next/link'
import EditIcon from '@/icons/edit-icon'
import RulingDeleteButton from './Rulings-delete'
import TopicsList from '../topics/Topics-list'

export default async function RulingsContent({ id }: { id: string }) {
  if (id !== '0') {
    const { data } = await ruling(id)
    const lastUpdate = new Date(data?.updatedAt as string)
    return (
      <section className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className="animeLeft">{data?.title}</h1>
          <div className={`${styles.iconsContainer} animeLeft`}>
            <Link
              href={`/rulings/${id}/edit`}
              className={`${styles.icon}`}
              aria-label="Editar"
            >
              <EditIcon />
              Editar
            </Link>
            <RulingDeleteButton id={id} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <p className="animeLeft">{data?.content}</p>
          <div className={styles.userContainer}>
            <p className="animeLeft">
              Última atualização feita por {data?.User.name}, em{' '}
              {lastUpdate.toLocaleDateString()}
            </p>
          </div>
        </div>
        {data && <TopicsList topics={data.Topics} rulingId={id} />}
      </section>
    )
  } else {
    return (
      <section className={styles.content}>
        <div className={styles.titleContainer}>
          <h1>Seja Bem-vindo ao SIRCE-JUD</h1>
        </div>
        <div className={styles.contentContainer}>
          <p
            className="animeLeft"
            style={{ fontSize: '1.25rem', marginBottom: '1rem' }}
          >
            O SIRCE-JUD é um sistema interno de registro e consulta de
            entendimentos judiciais que visa facilitar o dia a dia do magistrado
            e de sua assessoria, propiciando fácil acesso à informação relevante
            e ao trabalho em equipe.{' '}
          </p>
          <p className="animeLeft">
            Para iniciar, cadastre um entendimento ou clique nas opções
            mostradas ao lado.
          </p>
        </div>
      </section>
    )
  }
}
