import { LayoutDashboard, Star } from "lucide-react";
import SideBar, { SideBarItem } from "../components/SideBar";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Page() {
  return(
    <div className="w-screen h-screen bg-gray-700 flex">
      <SideBar>
        <SideBarItem icon={<LayoutDashboard/>} name="Dashboard" location="/"/>
        <SideBarItem icon={<Star/>} name="Favorites" location="/favorites"/>
      </SideBar>
      <div className="w-full h-full">
        <NavBar/>
        <Outlet/>
      </div>
    </div>
  )
}