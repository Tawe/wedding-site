import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import mapTheme from './mapTheme'

const settings = {
  center: {
    lat: 45.8536402,
    lng: -63.6661275,
  },
  zoom: 16,
}
const MapContainer = props => {
  return (
    <MapWrapper>
      <GoogleMapReact
        center={settings.center}
        zoom={settings.zoom}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        options={{
          styles: mapTheme,
          zoomControl: false,
          fullscreenControl: false,
        }}
      />
    </MapWrapper>
  )
}

const MapWrapper = styled('div')`
  width: 100%;
  height: 600px;
`

export default MapContainer
