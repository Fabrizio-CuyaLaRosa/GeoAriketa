import { LayoutDashboard } from 'lucide-react'
import './App.css'
import MainPage from './Components/MainPage'
import NavBar from './Components/NavBar'
import SideBar, { SideBarItem } from './Components/SideBar'

function App() {
  return (
    <div className="w-screen h-screen bg-gray-700 flex">
      <SideBar>
        <SideBarItem icon={<LayoutDashboard/>} name="Dashboard" location="/dashboard"/>
      </SideBar>
      <div className="w-full h-full">
        <NavBar/>
        <MainPage/>
      </div>
    </div>
  )
}

export default App
