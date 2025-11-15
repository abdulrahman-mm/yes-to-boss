// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { useEffect } from "react";

// // Fix default marker icon issue in Leaflet + Next.js
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// const DarkMap: React.FC = () => {
//   const position: [number, number] = [13.0721167, 80.2144964]; // Yes To Boss

//   useEffect(() => {
//     // Ensure map styles load correctly after hydration
//     import("leaflet/dist/leaflet.css");
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "450px",
//         borderRadius: "16px",
//         overflow: "hidden",
//       }}
//     >
//       <MapContainer
//         center={position}
//         zoom={15}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%" }}
//       >
//         {/* Dark themed map from CartoDB */}
//         <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//           attribution='&copy; <a href="https://carto.com/">CartoDB</a> &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//         />
//         <Marker position={position}>
//           <Popup>📍 Yes To Boss</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default DarkMap;
