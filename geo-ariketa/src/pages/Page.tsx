import { LayoutDashboard, Star } from "lucide-react";
import { Outlet } from "react-router-dom";
import SideBar, { SideBarItem } from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import { createContext, useEffect, useState } from "react";
import type { PlayerData } from "../Components/Interfaces";

export const DataContext = createContext<{data: PlayerData[], currentUser: PlayerData | undefined, setCurrentUser: React.Dispatch<React.SetStateAction<PlayerData | undefined>>} | undefined>(undefined);

export default function Page() {
  const [dataReady, setDataReady] = useState<boolean>(false);
  const [data, setData] = useState<PlayerData[]>([]);
  const [currentUser, setCurrentUser] = useState<PlayerData>();

  useEffect(() => {
    if (!dataReady) {
      fetch("data.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data)
        setDataReady(true)
      })
      .catch(_err => {
        return;
      });
    } else {
      setCurrentUser(data[0])
    }
  }, [dataReady])

  return(
    <DataContext value={{data, currentUser, setCurrentUser}}>
      <div className="w-screen h-screen bg-gray-200 flex overflow-hidden">
        <SideBar>
          <SideBarItem icon={<LayoutDashboard/>} name="Dashboard" location="/"/>
          <SideBarItem icon={<Star/>} name="Favorites" location="/favorites"/>
        </SideBar>
        <div className="w-full h-full flex flex-col">
          <NavBar/>
          <Outlet/>
        </div>
      </div>
    </DataContext>
  )
}