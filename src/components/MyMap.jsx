import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  return (
    <MapContainer
      className="w-[90%] h-[400px]"
      center={[57.0212, 24.2673]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[57.024147, 24.280388]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Bebru sala</Popup>
      </Marker>
      <Marker
        position={[57.029238, 24.291589]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Kraukļu sala</Popup>
      </Marker>
      <Marker
        position={[56.992603, 24.246195]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Šanhaja</Popup>
      </Marker>
      <Marker
        position={[57.010333, 24.268906]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Garšīgs šašliks</Popup>
      </Marker>
      <Marker
        position={[57.022835, 24.296984]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Līdakas māja</Popup>
      </Marker>
      <Marker
        position={[57.018904, 24.279944]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Zandarta māja</Popup>
      </Marker>
      <Marker
        position={[57.021115, 24.270002]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Līņu māja</Popup>
      </Marker>
      <Marker
        position={[56.990516, 24.247614]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Stajanka, lai aizietu uz maķīti</Popup>
      </Marker>
      <Marker
        position={[56.992096, 24.262364]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>Haļavnie koncerti</Popup>
      </Marker>
      <Marker
        position={[57.002929, 24.267818]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>
          Kad būs afigenni augstā jahta, tad psc te būs..... jāzāģē masts nost
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
