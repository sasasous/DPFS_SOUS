import './App.css'
import { Dashboard } from './components/Dashboard/Dashboard'
import { SideBar } from './components/SideBar/SideBar'

function App() {
  return (
    <div className = "container">
      <SideBar/>
      <Dashboard/>
    </div>
  );
}

export default App;