import React from "react";
import "./other-info.css";

export default function OtherInfo() {
  return (
    <div id="other-info">
      <div>
        <div class="other-info-icon">🌡️</div>
        <div class="other-info-title">FEELS LIKE</div>
        <div class="other-info-value" id="feels-like">
          21°
        </div>
      </div>

      <div>
        <div class="other-info-icon">🍃</div>
        <div class="other-info-title">WIND</div>
        <div class="other-info-value" id="wind">
          2.1m/s
        </div>
      </div>

      <div>
        <div class="other-info-icon">💧</div>
        <div class="other-info-title">HUMIDITY</div>
        <div class="other-info-value" id="humidity">
          94%
        </div>
      </div>
    </div>
  );
}
