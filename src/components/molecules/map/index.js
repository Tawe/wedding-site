import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import mapTheme from './mapTheme'

const settings = {
  center: {
    lat: 45.8533722,
    lng: -63.6658099
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
      >
        <AnyReactComponent
          lat={45.853996}
          lng={-63.6658099}
          text="My Marker"
        />
      </GoogleMapReact>
    </MapWrapper>
  )
}

const AnyReactComponent = () => (
  <svg width="17.298" height="23.063" viewBox="0 0 17.298 23.063">
    <path
      id="map-marker-alt"
      d="M7.76,22.6C1.215,13.11,0,12.136,0,8.649a8.649,8.649,0,1,1,17.3,0c0,3.487-1.215,4.461-7.76,13.949a1.082,1.082,0,0,1-1.778,0Zm.889-10.346a3.6,3.6,0,1,0-3.6-3.6A3.6,3.6,0,0,0,8.649,12.252Z"
      fill="#fff"
    />
  </svg>
)

const MapWrapper = styled.div`
  height: 542px;
  padding: 0;
  ${props => props.theme.media.tablet`padding:0 05%`}

 div:nth-child(9) > div:nth-child(2){
    display:none;
  }
`

export default MapContainer
