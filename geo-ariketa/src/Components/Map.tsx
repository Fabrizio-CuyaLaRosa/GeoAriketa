import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Locations } from "./Interfaces";

export default function Map({locations} : {
  locations: Locations[]
}) {
  return(
    <MapContainer center={[0, 0]} zoom={2} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(loc =>
        <Marker position={[loc.latitude, loc.longitude]}>
          <Popup>
            <a href={`https://wplace.live/?lat=${loc.latitude}&lng=${loc.longitude}`} target="_blank">
              <p><span className="font-semibold">Latitude:</span> {loc.latitude}</p>
              <p><span className="font-semibold">Longitude:</span> {loc.longitude}</p>
            </a>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}