import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const Image = ({ src, srcSetData, placeholder, alt }) => (
  <ProgressiveImage src={src} srcSetData={srcSetData} placeholder={placeholder}>
    {(src, _loading, srcSetData) => (
      <img
        src={src}
        srcSet={srcSetData.srcSet}
        sizes={srcSetData.sizes}
        style={{ width: '100%' }}
        {...alt}
      />
    )}
  </ProgressiveImage>
)

export default Image
