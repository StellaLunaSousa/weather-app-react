import React from "react";
import "./forecast.css"

export default function Forecast() {
    return (
        <div id="forecast">
        <div class="forecast-container">
        <div class="forecast-date">Mon</div>
        <div><img class="forecast-icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"/></div>
        <div class="forecast-temperature">
        <span class="forecast-temperature-max">25º</span> 
        <span class="forecast-temperature-min">18º</span>
        </div>
        </div>
        <div class="forecast-container">
        <div class="forecast-date">Tue</div>
        <div><img class="forecast-icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"/></div>
        <div class="forecast-temperature">
        <span class="forecast-temperature-max">27º</span> 
        <span class="forecast-temperature-min">20º</span>
        </div>
        </div>
        <div class="forecast-container">
        <div class="forecast-date">Wed</div>
        <div><img class="forecast-icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"/></div>
        <div class="forecast-temperature">
        <span class="forecast-temperature-max">28º</span> 
        <span class="forecast-temperature-min">20º</span>
        </div>
        </div>
        <div class="forecast-container">
        <div class="forecast-date">Thu</div>
        <div><img class="forecast-icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"/></div>
        <div class="forecast-temperature">
        <span class="forecast-temperature-max">29º</span> 
        <span class="forecast-temperature-min">20º</span>
        </div>
        </div>
        <div class="forecast-container">
        <div class="forecast-date">Fri</div>
        <div><img class="forecast-icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"/></div>
        <div class="forecast-temperature">
        <span class="forecast-temperature-max">31º </span> 
        <span class="forecast-temperature-min">20º</span>
        </div>
        </div></div>
    );
}