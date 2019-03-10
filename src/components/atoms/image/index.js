import React from 'react'
import ProgressiveImage from 'react-progressive-image'

function Image(props) {
  return (
    <ProgressiveImage
      src={props.src}
      srcSetData={{
        srcSet: { ...props.srcSet },
        sizes: { ...props.sizes },
      }}
      placeholder={props.placeholder}
    >
      {(src, _loading, srcSetData) => (
        <img
          src={src}
          srcSet={srcSetData.srcSet}
          sizes={srcSetData.sizes}
          {...props.alt}
        />
      )}
    </ProgressiveImage>
  )
}
