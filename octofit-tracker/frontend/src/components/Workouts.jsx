import { useEffect, useState } from 'react'
import { fetchApiCollection } from '../api.js'
import { CollectionState } from './CollectionState.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
const endpoint = '/api/workouts/'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApiCollection(endpoint)
      .then(setWorkouts)
      .catch(() => setError('Workouts could not be loaded.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="panel">
      <p className="eyebrow">PERSONALIZED</p>
      <h2>Workouts</h2>
      <CollectionState
        loading={loading}
        error={error}
        items={workouts}
        emptyMessage="No workouts are available yet."
        renderItem={(workout) => (
          <article className="collection-item" key={workout._id ?? workout.title}>
            <strong>{workout.title}</strong>
            <span>{workout.difficulty} · {workout.durationMinutes} min · {workout.focus}</span>
          </article>
        )}
      />
    </section>
  )
}

export default Workouts
