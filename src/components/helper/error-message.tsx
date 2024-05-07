export default function ErrorMessage({ error }: { error: string }) {
  if (error === '') return null
  if (error === 'fetch failed')
    return (
      <p style={{ color: '#f31', margin: '1rem 0' }}>
        Erro de conexão com o servidor.
      </p>
    )
  return <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>
}
