import React from "react";
import style from "./Details.module.css";
const Details = () => {
  return (
    <div className={style.details}>
      <h2>
        <strong>Overview:</strong>
      </h2>
      <p>
        A modern weather application featuring a sleek dark theme,
        <br /> providing real-time weather updates with a user-friendly
        interface.
        <br /> It displays key weather information like temperature, humidity,
        and wind speed, <br />
        enhancing user experience with its intuitive design.
        <br />
      </p>

      <h2>Features:</h2>
      <ul>
        <li>Real-time weather updates for any location.</li>
        <li>Elegant dark theme for a visually appealing experience.</li>
        <li>Interactive search bar for quick weather info.</li>
        <li>Responsive design optimized for all devices.</li>
      </ul>

      <h2>Tools & Technologies Used:</h2>
      <ul>
        <li>
          <strong>React & Vite:</strong> Component-based architecture for
          dynamic content and fast development workflow.
        </li>
        <li>
          <strong>JavaScript:</strong> Core functionality and handling user
          interactions.
        </li>
        <li>
          <strong>Weather API:</strong> Fetch real-time weather data based on
          user input.
        </li>
        <li>
          <strong>Git & GitHub:</strong> Version control and project hosting.
        </li>
      </ul>
    </div>
  );
};

export default Details;
