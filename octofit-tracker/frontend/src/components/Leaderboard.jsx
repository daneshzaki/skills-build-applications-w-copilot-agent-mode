import { useEffect, useState } from 'react'
import { fetchApiCollection } from '../api.js'
import { CollectionState } from './CollectionState.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
const endpoint = '/api/leaderboard/'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApiCollection(endpoint)
      .then(setEntries)
      .catch(() => setError('The leaderboard could not be loaded.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="panel">
      <p className="eyebrow">COMPETE</p>
      <h2>Leaderboard</h2>
      <CollectionState
        loading={loading}
        error={error}
        items={entries}
        emptyMessage="No leaderboard entries yet."
        renderItem={(entry) => (
          <article className="collection-item" key={entry._id ?? entry.rank}>
            <strong>#{entry.rank} · {entry.user?.displayName ?? entry.user ?? 'Athlete'}</strong>
            <span>{entry.points} points · {entry.period}</span>
          </article>
        )}
      />
    </section>
  )
}

export default Leaderboard
