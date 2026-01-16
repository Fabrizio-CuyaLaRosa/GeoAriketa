import { createRef, useContext, useState } from "react";
import Map from "../Components/Map";
import { DataContext } from "./Page";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LatLng, Map as LeafletMap, type LatLngExpression } from "leaflet";

export default function Favorites() {
  const dataContext = useContext(DataContext);
  if (!dataContext?.currentUser) return;
  const mapRef = createRef<LeafletMap>();
  const [open, setOpen] = useState<boolean>(true);

  const handleLocationClick = (value: LatLngExpression) => {
    mapRef.current?.flyTo(value, 7);
  }

  return(
    <div className="w-full h-full relative">
      <Map locations={dataContext.currentUser.favoriteLocations} ref={mapRef}/>
      <div className="absolute top-1/2 transform -translate-y-1/2 z-9999 flex h-full w-full pointer-events-none">
        <div
          onClick={() => setOpen(!open)}
          className="rounded-full bg-white border border-black max-h-fit my-auto ms-auto me-2 pointer-events-auto">
          {open ? 
            <ChevronRight size={36}/>
          :
            <ChevronLeft size={36}/>
          }
        </div>
        {open &&
          <div className="bg-white w-1/5 h-3/4 my-auto divide-y divide-gray-500 flex flex-col pointer-events-auto">
            <div className="text-center py-2 text-xl">Favorite Locations</div>
            <div className="p-5 overflow-y-scroll h-full">
              {dataContext.currentUser.favoriteLocations.map(loc =>
                <div
                  onClick={() => handleLocationClick(new LatLng(loc.latitude, loc.longitude))}
                  className="border border-black [&:not(:last-child)]:mb-5 px-4 py-2 hover:bg-gray-300 cursor-pointer">
                  <p><span className="font-semibold">Latitude: </span>{loc.latitude}</p>
                  <p><span className="font-semibold">Longitude: </span>{loc.longitude}</p>
                </div>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  )
}