import { useEffect, useState } from 'react'
import { fetchApiCollection } from '../api.js'
import { CollectionState } from './CollectionState.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/
const endpoint = '/api/users/'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApiCollection(endpoint)
      .then(setUsers)
      .catch(() => setError('Users could not be loaded.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="panel">
      <p className="eyebrow">MEMBERS</p>
      <h2>Users</h2>
      <CollectionState
        loading={loading}
        error={error}
        items={users}
        emptyMessage="No users have joined yet."
        renderItem={(user) => (
          <article className="collection-item" key={user._id ?? user.username}>
            <strong>{user.displayName}</strong>
            <span>@{user.username} · {user.totalPoints} points</span>
          </article>
        )}
      />
    </section>
  )
}

export default Users
