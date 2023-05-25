import L from 'leaflet'
import { Marker } from 'react-leaflet'

const CustomMarker = ({ icon, iconOptions, children, ...props }) => {

  let markerIcon
  switch (icon) {
    case 'dot':
      markerIcon = L.icon({
        iconUrl: '/images/map/marker-icon.png',
        iconSize: null,
        iconAnchor: [12, 39],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        popupAnchor: [1, -21],
        className: 'custom-marker-dot'
      })
      break
    case 'custom':
      markerIcon = L.icon({
        iconUrl: iconOptions.url,
        iconSize: [iconOptions.size[0], iconOptions.size[1]],
        iconAnchor: iconOptions.iconAnchor ? [iconOptions.iconAnchor[0], iconOptions.iconAnchor[1]] : null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        popupAnchor: iconOptions.popupAnchor ? [iconOptions.popupAnchor[0], iconOptions.popupAnchor[1]] : [0, -(iconOptions.size[1] / 1.5)],
      })
      break
    default:
      markerIcon = L.icon({
        iconUrl: '/images/map/marker-icon.png',
        iconSize: [25, 39],
        iconAnchor: [12, 39],
        shadowUrl: '/images/map/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [13, 41],
        popupAnchor: [1, -37],
      })
      break
  }

  return (
    <Marker {...props} icon={markerIcon}>
      {children}
    </Marker>
  )
}

export default CustomMarker
