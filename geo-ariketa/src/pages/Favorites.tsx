import { useContext } from "react";
import Map from "../Components/Map";
import { DataContext } from "./Page";

export default function Favorites() {
  const dataContext = useContext(DataContext);
  if (!dataContext?.currentUser) return;

  return(
    <div className="w-full h-full">
      <Map locations={dataContext.currentUser.favoriteLocations}/>
    </div>
  )
}