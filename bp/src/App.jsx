import PlayerCard from './components/PlayerCard'

function App() {
  return (
    <main className="app-shell">
      <PlayerCard name="Leo Santos" 
      position="ST" 
      rating={89} 
      tier="gold" 
      teamColor="#1e6b34"
      stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}
      />

      <PlayerCard name="Mia Johnson" 
      position="CM" 
      rating={85} 
      tier="silver" 
      teamColor="#1e3a6b"
      stats={{ pac: 80, sho: 75, pas: 88, dri: 82, def: 70, phy: 78 }}
      />
      
      <PlayerCard name="Ethan Brown" 
      position="CB" 
      rating={82} 
      tier="bronze" 
      teamColor="#6b1e1e"
      stats={{ pac: 70, sho: 60, pas: 65, dri: 68, def: 85, phy: 80 }}
      />
 
    </main>
  )
}

export default App
