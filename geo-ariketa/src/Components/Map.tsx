import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Locations } from "./Interfaces";
import { LatLng, LatLngBounds, Map as LeafletMap } from "leaflet";

export default function Map({locations, ref} : {
  locations: Locations[]
  ref: React.RefObject<LeafletMap | null>;
}) {
  const latlngBounds = new LatLngBounds(new LatLng(-90, -180), new LatLng(90, 180));
  return(
    <MapContainer center={[0, 0]} zoom={3} minZoom={3} className="h-full z-0" maxBounds={latlngBounds} bounceAtZoomLimits={true} ref={ref}>
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