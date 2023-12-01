import React, { useState } from "react";
import "./search.css";

export default function Search() {
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 19º in ${location}`);
  }
  function updateLocation(event) {
    setLocation(event.target.value);
  }

  return (
    <div id="form-container" onSubmit={handleSubmit}>
      <form id="search-form">
        <input
          id="input-search"
          type="search"
          placeholder="Search for a location..."
          onChange={updateLocation}
          value={location}
        />
        <input id="input-submit" type="submit" value="Search" />
      </form>
      <h3>{message}</h3>
    </div>
  );
}
