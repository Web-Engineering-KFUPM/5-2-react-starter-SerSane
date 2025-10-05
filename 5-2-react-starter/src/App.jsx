import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard 
            name="Feras Al-Harbi" 
            id="202258300" 
            dept="Computer Science" 
          />
          <StudentCard 
            name="Fahad Al-Harbi" 
            id="199058300" 
            dept="Dentistry" 
          />
        </div>
      </main>
    </div>
  )
}

export default App
