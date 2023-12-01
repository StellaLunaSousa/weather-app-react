import React from "react";
import "./weather.css"

export default function Weather() {
  return (
    <div>
      <div>
        <img
          id="weather-icon"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
        />
      </div>
      <div id="weather-temperature">21ºC</div>
      <div id="weather-condition">broken clouds</div>
      <div id="weather-message">good evening!</div>
    </div>
  );
}
