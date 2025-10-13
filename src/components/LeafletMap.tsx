import type { LeafletEvent } from "leaflet";
import type { ComponentProps } from "react";
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
  viewOnly?: boolean;
};

const LeafletMap = ({
  center = [16.80528, 96.15611],
  zoom = 6,
  onMarkerMove,
  viewOnly = false,
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
          draggable={!viewOnly}
          eventHandlers={{
            move: (e) => onMarkerMove?.(e),
          }}
        />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
