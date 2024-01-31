import React from 'react'

const PhotoGrid = () => {
  return (
<div>
  <div className="w3-row">
    <div className="w3-half">
      <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706719491/Hidden%20Murals/img_4174_b6cipt.webp" style={{width:"30%"}}/>
      <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706717460/Hidden%20Murals/Stik-Street-Art-Alphabet-City-NYC_wxg4db.jpg" style={{width:"30%"}}/>
      <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647981/Hidden%20Murals/Roa-street-art-in-Williamsburg-Brooklyn_aghese.jpg" style={{width:"30%"}}/>
    </div>

    <div className="w3-half">
      <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647554/Hidden%20Murals/f485db688a960e582be56192bf1874721d-11-dface_e0gxc2.webp" style={{width:"30%"}}/>
      <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647348/Hidden%20Murals/IMG_0190_sfjsld.png" style={{width:"30%"}}/>
    </div>
  </div>
</div>
  )
}

export default PhotoGrid