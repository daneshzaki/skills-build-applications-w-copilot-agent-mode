import { useEffect, useState } from 'react'
import { fetchApiCollection } from '../api.js'
import { CollectionState } from './CollectionState.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
const endpoint = '/api/activities/'

function Activities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApiCollection(endpoint)
      .then(setActivities)
      .catch(() => setError('Activities could not be loaded.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="panel">
      <div className="panel-heading"><div><p className="eyebrow">TRACKING</p><h2>Activities</h2></div></div>
      <CollectionState
        loading={loading}
        error={error}
        items={activities}
        emptyMessage="No activities recorded yet."
        renderItem={(activity) => (
          <article className="collection-item" key={activity._id ?? `${activity.type}-${activity.recordedAt}`}>
            <strong>{activity.type}</strong>
            <span>{activity.durationMinutes} min · {activity.points} points</span>
          </article>
        )}
      />
    </section>
  )
}

export default Activities
