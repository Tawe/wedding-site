import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const mapTheme = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
    ],
  },
]

const settings = {
  center: {
    lat: 45.8536402,
    lng: -63.6661275,
  },
  zoom: 16,
}
const MapContainer = props => (
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

const MapWrapper = styled('div')`
  width: 100%;
  height: 600px;
`

export default MapContainer
