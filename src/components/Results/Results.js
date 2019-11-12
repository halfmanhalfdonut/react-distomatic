import React from 'react';

import { getOrderedLeague, League } from '../';

function Results(props) {
  const { active, latitude, longitude } = props;
  let keys = Object.keys(active);
  let filtered = keys.filter(key => active[key]);

  return <div className="results">
    { filtered.map(key => <League key={ `league-${key}`} league={getOrderedLeague({ latitude, longitude, league: props.leagues[key]})} />) }
  </div>;
}

export { Results };
