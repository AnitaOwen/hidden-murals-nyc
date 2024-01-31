import React from "react";

const About = () => {
  return (
    <div className="About-container">
      <h2>About The Developers</h2>
      <body>
        <div id="about">
          <h4>About</h4>
          <ul className="socials">
            <li>
              <strong>Armando Pires</strong>
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/ArmandoPires103"
                target="_blank"
                rel=""
              >
                https://github.com/ArmandoPires103
              </a>
              <br />
              Fun Fact: Visited 7 national parks.
            </li>
            <li>
              <strong>Anita Owen</strong>
              <br />
              GitHub:{" "}
              <a href="https://github.com/AnitaOwen" target="_blank" rel="">
                https://github.com/AnitaOwen
              </a>
              <br />
              Fun Fact: Been a DJ for 18 years.
            </li>
            <li>
              <strong>Jazon Younge</strong>
              <br />
              GitHub:{" "}
              <a href="https://github.com/JayZ44" target="_blank" rel="">
                https://github.com/JayZ44
              </a>
              <br />
              Fun Fact: I can draw pretty good :D
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
};

export default About;