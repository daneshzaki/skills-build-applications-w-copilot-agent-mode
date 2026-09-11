import { useEffect, useState } from 'react'
import { fetchApiCollection } from '../api.js'
import { CollectionState } from './CollectionState.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/
const endpoint = '/api/teams/'

function Teams() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApiCollection(endpoint)
      .then(setTeams)
      .catch(() => setError('Teams could not be loaded.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="panel">
      <p className="eyebrow">COMMUNITY</p>
      <h2>Teams</h2>
      <CollectionState
        loading={loading}
        error={error}
        items={teams}
        emptyMessage="No teams have been created yet."
        renderItem={(team) => (
          <article className="collection-item" key={team._id ?? team.name}>
            <strong>{team.name}</strong>
            <span>{team.description} · {team.members?.length ?? 0} members</span>
          </article>
        )}
      />
    </section>
  )
}

export default Teams
