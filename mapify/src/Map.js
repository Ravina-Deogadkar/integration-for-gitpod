import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Map(){     
    const position = [51.505, -0.09]

    const mapStyle = {
      position: "relative",
      outline: "none",
      height: "400px",
      overflow: "hidden",
      boxSizing: "border-box"
    }
return (
    <div style={{border:"5px",  padding: "1rem",
    boxSizing: "border-box"}}>
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} style = {mapStyle}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
  </MapContainer>
  </div>
);

   }

   export default Map;