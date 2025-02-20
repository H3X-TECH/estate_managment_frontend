import { LeafletEvent } from "leaflet";
import { ComponentProps, ComponentType } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type LocationMarkerProps = ComponentProps<typeof Marker>;
const LocationMarker = (props: LocationMarkerProps) => {
  return (
    <Marker {...props}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

type LeafletMapProps = {
  center?: [number, number];
  zoom?: number;
  onMarkerMove?: (e: LeafletEvent) => void;
};

const LeafletMap = ({
  center = [51.505, -0.09],
  zoom = 4,
  onMarkerMove,
}: LeafletMapProps) => {
  return (
    <div className="w-full h-full">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={center}
          draggable
          eventHandlers={{
            move: (e) => onMarkerMove?.(e),
          }}
        />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
