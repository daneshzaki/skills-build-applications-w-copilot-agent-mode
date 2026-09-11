export function CollectionState({ loading, error, items, emptyMessage, renderItem }) {
  if (loading) {
    return <p className="muted">Loading...</p>
  }

  if (error) {
    return <p className="alert alert-warning mb-0">{error}</p>
  }

  if (items.length === 0) {
    return <p className="muted">{emptyMessage}</p>
  }

  return <div className="collection-list">{items.map(renderItem)}</div>
}
