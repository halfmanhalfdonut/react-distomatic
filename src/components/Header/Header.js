import React from 'react';
import './header.css';

import { Filter } from '../';

function Header(props) {
  const {
    handleGo,
    handleLatitude,
    handleLongitude,
    handleLocation,
    latitude,
    longitude
  } = props;
  return <header className="header">
    <form className="search" onSubmit={handleGo}>
      <h1 className="title">Dist-o-matic</h1>

      <label className="label label-latitude" htmlFor="latitude">Latitude</label>
      <input onChange={handleLatitude} value={latitude} type="text" name="latitude" className="input input-latitude" />

      <label className="label label-longitude" htmlFor="longitude">Longitude</label>
      <input onChange={handleLongitude} value={longitude} type="text" name="longitude" className="input input-longitude" />

      <button onClick={handleGo} type="submit" className="button button-go">Go!</button>
      <button onClick={handleLocation} type="button" className="button-location" title="Use My Location">
        <img src="images/location.svg" alt="Use My Location" className="location-icon" />
        Use Your Location
      </button>
    </form>
    <Filter {...props} />
  </header>;
}

export { Header };