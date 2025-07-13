import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128, // Example: NYC
  lng: -74.006,
}
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const CollegeMap = () => {
  return (
    <LoadScript googleMapsApiKey= {apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Add markers or other components here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default CollegeMap;
