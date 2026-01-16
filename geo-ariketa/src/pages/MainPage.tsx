import { useContext, useEffect, useState } from "react"
import { DataContext } from "./Page"
import "../style/Main.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const dataContext = useContext(DataContext);
  if (!dataContext?.currentUser) return;
  const navigate = useNavigate();
  const [charges, setCharges] = useState<number | undefined>(undefined);
  const rechargeCooldown = dataContext.currentUser.charges.cooldownMs;
  const maxCharges = dataContext.currentUser.charges.max;

  const goToFavorites = () => {
    navigate("/favorites")
  }

  useEffect(() => {
    setCharges(dataContext.currentUser!.charges.count);
  }, [dataContext.currentUser])

  useEffect(() => {
    if (charges !== undefined && charges < maxCharges) {
      const timer = setTimeout(() => {
        setCharges(charges+1);
      }, rechargeCooldown)

      return() => clearTimeout(timer);
    }
  }, [charges])

  return(
    <div className="w-full h-full grid grid-cols-4 grid-rows-4 p-8 gap-10">
      <div className="grid grid-cols-4 p-6 border border-black bg-gray-100 overflow-hidden">
        <div>
          <img src={dataContext.currentUser.picture} className="size-full rounded-full"/>
        </div>
        <div className="col-span-3 my-auto *:text-xl indent-10 font-bold">
          <p className="text-gray-700">{dataContext.currentUser.name}</p>
          <p className="text-orange-500">#{dataContext.currentUser.id}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 p-6 border border-black bg-gray-500 text-white overflow-hidden row-start-2">
        <div className="h-full flex">
          <img src={"/discord.svg"} className="size-24 my-auto fill-current"/>
        </div>
        <div className="col-span-3 my-auto *:text-xl indent-10 font-bold">
          <p>{dataContext.currentUser.discord}</p>
          <p>{dataContext.currentUser.discordId}</p>
        </div>
      </div>
      <div className="p-6 border border-black bg-white overflow-hidden row-start-1 col-start-4 row-span-2 grid grid-rows-4 dataBox">
        <div>
          <p>Level</p>
          <p>{dataContext.currentUser.level.toFixed()}</p>
        </div>
        <div>
          <p>Pixels Painted</p>
          <p>{dataContext.currentUser.pixelsPainted}</p>
        </div>
        <div>
          <p>Droplets</p>
          <p>{dataContext.currentUser.droplets}</p>
        </div>
        <div>
          <p>Charges</p>
          <div className="grid grid-cols-2">
            <p><span>Current:</span> {charges}</p>
            <p><span>Max:</span> {maxCharges}</p>
          </div>
        </div>
      </div>
      <div
        onClick={goToFavorites}
        className="p-4 border border-black bg-white overflow-hidden row-start-3 col-span-4 row-span-2 flex flex-col cursor-pointer hover:bg-slate-100">
        <div className="mb-4 flex justify-between">
          <p className="text-xl font-bold">Favorite Locations</p>
          <p className="my-auto">Remaining favorite locations: {dataContext.currentUser.maxFavoriteLocations - dataContext.currentUser.favoriteLocations.length}</p>
        </div>
        <div className="border h-full grid grid-cols-5 grid-rows-3 p-5 gap-2">
          {dataContext.currentUser.favoriteLocations.length > 0 ?
            dataContext.currentUser.favoriteLocations.map((loc, idx) => {
              const index = idx + 1;
              let row = index % 3;
              if (row == 0) row = 3;
              let col = Math.ceil(index / 3);
              return(
                <div className={`row-start-${row} col-start-${col} border flex flex-col justify-center indent-5`}>
                  <p><span className="font-semibold">Latitude:</span> {loc.latitude}</p>
                  <p><span className="font-semibold">Longitude:</span> {loc.longitude}</p>
                </div>
              )
            })
          :
            <div>Without favorite locations</div>}
        </div>
      </div>
    </div>
  )
}