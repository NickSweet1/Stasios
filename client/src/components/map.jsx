// /*global google*/
// import { useState, useEffect, useRef } from "react";
// import {
//   GoogleMapProvider,
//   useGoogleMap,
// } from "@ubilabs/google-maps-react-hooks";

// const apiKey = process.env.MAP_API_KEY;

// const mapOptions = {
//   zoom: 12,
//   center: {
//     lat: 28.54580402327879,
//     lng: -81.35207837861817,
//   },
// };

// function Map() {
//   console.log(apiKey);
//   console.log(process.env);
//   const [mapContainer, setMapContainer] = useState(null);
//   const lat = 28.54580402327879;
//   const lng = -81.35207837861817;
//   const { map } = useGoogleMap();
//   const markerRef = useRef();

//   useEffect(() => {
//     if (!map || markerRef.current) return;
//     markerRef.current = new google.maps.Marker({ map });
//   }, [map]);

//   useEffect(() => {
//     if (!markerRef.current) return;
//     if (isNaN(lat) || isNaN(lng)) return;
//     markerRef.current.setPosition({ lat, lng });
//     map.panTo({ lat, lng });
//   }, [lat, lng, map]);

//   return (
//     <GoogleMapProvider
//       googleMapsAPIKey={apiKey}
//       options={mapOptions}
//       mapContainer={mapContainer}>
//       <div ref={(node) => setMapContainer(node)} style={{ height: "25vh" }} />
//     </GoogleMapProvider>
//   );
// }

// export default Map;
