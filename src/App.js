import React, { useState } from 'react';
import './App.css';

import * as leagues from './data';
import { Header, Results } from './components';

function App() {
  const [ activeLeagues, setActiveLeagues ] = useState(
    Object.keys(leagues).reduce((memo, key) => {
      memo[key] = true;
      return memo;
    }, {})
  );
  const [ latitude, setLatitude ] = useState('37.539');
  const [ longitude, setLongitude ] = useState('-77.433');
  const [ isLoading, setIsLoading ] = useState(false);

  function handleLatitude(e) {
    setLatitude(e.target.value);
  }

  function handleLongitude(e) {
    setLongitude(e.target.value);
  }

  function handlePosition({ coords }) {
    setLatitude(parseFloat(coords.latitude).toFixed(3));
    setLongitude(parseFloat(coords.longitude).toFixed(3));
  }

  function handleGo(e) {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);

      let position = {
        coords: { latitude, longitude }
      };

      handlePosition(position);
      setIsLoading(false);
    }
  }

  function handleError() {
    console.error('Enable geolocation!');
  }

  function handleLocation(e) {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handlePosition, handleError, { enableHighAccuracy: true });
    } else {
      handleError();
    }
  }

  function toggleSport(key) {
    let clone = Object.assign({}, activeLeagues);
    clone[key] = !clone[key];

    setActiveLeagues(clone);
  }

  return <React.Fragment>
    <Header
      active={activeLeagues}
      leagues={leagues}
      toggleSport={toggleSport}
      handleLocation={handleLocation}
      handleGo={handleGo}
      handleLatitude={handleLatitude}
      handleLongitude={handleLongitude}
      handlePosition={handlePosition}
      latitude={latitude}
      longitude={longitude}
    />
    <Results
      active={activeLeagues}
      leagues={leagues}
      latitude={latitude}
      longitude={longitude}
    />
  </React.Fragment>;
}

export default App;
