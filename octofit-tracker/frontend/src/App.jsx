import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function Overview() {
  return (
    <>
      <section className="welcome">
        <div>
          <p className="eyebrow">OCTOFIT TRACKER</p>
          <h1>Build a healthier rhythm.</h1>
          <p className="welcome-copy">Track activity, discover workouts, and make progress with your team.</p>
        </div>
        <NavLink className="primary-button" to="/workouts">Explore workouts <span>→</span></NavLink>
      </section>
      <section className="stat-grid" aria-label="Tracker features">
        <article className="stat-card accent-card"><span className="stat-label">ACTIVITIES</span><strong>Track</strong><small>Turn movement into momentum</small></article>
        <article className="stat-card"><span className="stat-label">WORKOUTS</span><strong>Grow</strong><small>Find your next challenge</small></article>
        <article className="stat-card"><span className="stat-label">TEAMS</span><strong>Connect</strong><small>Reach goals together</small></article>
        <article className="stat-card"><span className="stat-label">LEADERBOARD</span><strong>Compete</strong><small>Celebrate every win</small></article>
      </section>
    </>
  )
}

function App() {
  const links = [
    ['/', 'Overview'],
    ['/activities', 'Activities'],
    ['/workouts', 'Workouts'],
    ['/teams', 'Teams'],
    ['/leaderboard', 'Leaderboard'],
    ['/users', 'Users'],
  ]

  return (
    <main className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/" aria-label="OctoFit Tracker home">
          <img src="/octofitapp-small.png" alt="" />
          <span>OctoFit <em>Tracker</em></span>
        </NavLink>
        <nav aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  )
}

export default App
