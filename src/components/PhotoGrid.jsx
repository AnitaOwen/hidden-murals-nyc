import React from 'react';
import About from './About';

const PhotoGrid = () => {
  return (
    <div className="w3-content" style={{ maxWidth: '1500px' }}>
    <head>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css" />
        <style>
          {`
            body {font-family: "Raleway", Arial, sans-serif}
            .w3-row img {margin-bottom: -8px}
          `}
        </style>
      </head>
      {/* Header */}
      <header className="w3-container w3-xlarge w3-padding-24">
        <a href="#" className="w3-left w3-button w3-white">HIDDEN MURALS</a>
        <a href="#about" className="w3-right w3-button w3-white">About</a>
      </header>

      <div>
        <div className="w3-row">
          <div className="w3-half">
            <img
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706719491/Hidden%20Murals/img_4174_b6cipt.webp"
              style={{ width: '100%' }}
              alt="Art 1"
            />
            <img
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706645486/Hidden%20Murals/Swoon-Subway-Windows_1024x_a0b8cv.webp"
              style={{ width: '100%' }}
              alt="Art 2"
            />
            <img
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647981/Hidden%20Murals/Roa-street-art-in-Williamsburg-Brooklyn_aghese.jpg"
              style={{ width: '100%' }}
              alt="Art 3"
            />
          </div>

          <div className="w3-half">
            <img
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647554/Hidden%20Murals/f485db688a960e582be56192bf1874721d-11-dface_e0gxc2.webp"
              style={{ width: '100%' }}
              alt="Art 4"
            />
            <img
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647348/Hidden%20Murals/IMG_0190_sfjsld.png"
              style={{ width: '100%' }}
              alt="Art 5"
            />
            {/* Footer / About Section */}
        <footer className="w3-light-grey w3-padding-64 w3-center" id="about">
            <p>
              <About/>
            </p>
            <p className="w3-large w3-text-pink">Do not hesitate to contact !</p>
          
        </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
