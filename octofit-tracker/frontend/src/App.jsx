import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="OctoFit Tracker home">
          <img src="/octofitapp-small.png" alt="" />
          <span>OctoFit <em>Tracker</em></span>
        </a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#overview">Overview</a>
          <a href="#workouts">Workouts</a>
          <a href="#team">Team</a>
        </nav>
        <button className="profile-button" type="button" aria-label="Open profile">AJ</button>
      </header>

      <section className="welcome" id="overview">
        <div>
          <p className="eyebrow">THURSDAY, SEPTEMBER 10</p>
          <h1>Good morning, Alex.</h1>
          <p className="welcome-copy">Small, consistent wins add up. You are on a 6-day streak.</p>
        </div>
        <button className="primary-button" type="button">Log activity <span>+</span></button>
      </section>

      <section className="stat-grid" aria-label="Weekly summary">
        <article className="stat-card accent-card"><span className="stat-label">WEEKLY SCORE</span><strong>842</strong><small><b>+18%</b> from last week</small></article>
        <article className="stat-card"><span className="stat-label">ACTIVE MINUTES</span><strong>186</strong><small>of 240 goal</small><div className="progress"><span style={{ width: '78%' }} /></div></article>
        <article className="stat-card"><span className="stat-label">CALORIES BURNED</span><strong>2,480</strong><small>of 3,000 goal</small><div className="progress warm"><span style={{ width: '82%' }} /></div></article>
        <article className="stat-card"><span className="stat-label">CURRENT STREAK</span><strong>6 <i>days</i></strong><small>Personal best: 12 days</small></article>
      </section>

      <section className="content-grid">
        <article className="panel workout-panel" id="workouts">
          <div className="panel-heading"><div><p className="eyebrow">UP NEXT</p><h2>Strength and mobility</h2></div><span className="duration">32 min</span></div>
          <p className="muted">A balanced session to build power and keep your range of motion sharp.</p>
          <div className="workout-meta"><span>Intermediate</span><span>6 exercises</span><span>320 kcal</span></div>
          <button className="dark-button" type="button">Start workout <span>→</span></button>
        </article>

        <article className="panel activity-panel">
          <div className="panel-heading"><h2>Recent activity</h2><a href="#activity">View all</a></div>
          <ul className="activity-list">
            <li><span className="activity-icon run">R</span><div><strong>Morning run</strong><small>Today, 7:42 AM</small></div><b>5.2 km</b></li>
            <li><span className="activity-icon lift">S</span><div><strong>Strength training</strong><small>Yesterday, 6:10 PM</small></div><b>42 min</b></li>
            <li><span className="activity-icon walk">W</span><div><strong>Evening walk</strong><small>Tuesday, 8:35 PM</small></div><b>3.1 km</b></li>
          </ul>
        </article>

        <article className="panel team-panel" id="team">
          <div className="panel-heading"><div><p className="eyebrow">YOUR TEAM</p><h2>Summit Striders</h2></div><a href="#team">See leaderboard</a></div>
          <div className="leader"><span className="rank">01</span><span className="avatar coral">MC</span><div><strong>Maya Chen</strong><small>1,204 points</small></div><span className="up">↑ 2</span></div>
          <div className="leader current"><span className="rank">02</span><span className="avatar teal">AJ</span><div><strong>You</strong><small>842 points</small></div><span className="up">↑ 1</span></div>
          <div className="leader"><span className="rank">03</span><span className="avatar gold">JR</span><div><strong>Jordan Reed</strong><small>796 points</small></div><span className="steady">-</span></div>
        </article>
      </section>
    </main>
  )
}

export default App
