import React from 'react'

function ImageComponent({ src, alt, width }) {
    return (
        <img src={src} alt={alt} width={width} />
    )
}

export default ImageComponent