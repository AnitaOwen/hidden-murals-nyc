import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';

const PhotoGrid = () => {
  return (
    <html lang="en">
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
      <body >
        {/* PAGE CONTENT */}
        <div className="w3-content" style={{ maxWidth: '1500px' }}>
          {/* Header */}
          <header className="w3-container w3-xlarge w3-padding-24">
          <Link to="/murals">
            <a href="#" className="w3-left w3-button w3-white">
              Hidden Murals
            </a>
          </Link>
            <a href="#about" className="w3-right w3-button w3-white">
              About
            </a>
          </header>

          {/* Photo Grid */}
          <div className="w3-row">
            <div className="w3-half">
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706719491/Hidden%20Murals/img_4174_b6cipt.webp" style={{ width: '100%' }} />
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647554/Hidden%20Murals/f485db688a960e582be56192bf1874721d-11-dface_e0gxc2.webp" style={{ width: '100%' }} />
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706647348/Hidden%20Murals/IMG_0190_sfjsld.png" style={{ width: '100%' }} />
            </div>

            <div className="w3-half">
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706645486/Hidden%20Murals/Swoon-Subway-Windows_1024x_a0b8cv.webp" style={{ width: '100%' }} />
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706575529/Hidden%20Murals/sf-shepard-fairey-nyc-mural_hjqkll.jpg" style={{ width: '100%' }} />
              <img src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1706805153/Hidden%20Murals/Bushwick-Collective-mural-in-Brooklyn_wcpnx2.jpg" style={{ width: '100%', height: '750px' }} />
            </div>
          </div>

          {/* End Page Content */}
        </div>

        {/* Footer / About Section */}
        <footer className="w3-light-grey w3-padding-64 w3-center" id="about">
          <form style={{ margin: 'auto', width: '60%' }} action="/action_page.php" target="_blank">
            <p>
              <About/>
            </p>
            <p className="w3-large w3-text-pink">Do not hesitate to contact me! Send us questions!</p>
          </form>
          <br />
          
        </footer>
      </body>
    </html>
  );
};

export default PhotoGrid;
