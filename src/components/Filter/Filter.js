import React from 'react';
import './filter.css';

function Filter(props) {
  let keys = Object.keys(props.leagues);

  function handleClick(key) {
    props.toggleSport(key);
  }

  function getClassName(key) {
    let className = 'selection-sport';
    let filtered = keys.filter(league => props.active[league]);

    if (!filtered.includes(key)) {
      className += ' unselected-sport';
    }

    return className;
  }

  return <nav className="nav">
    { keys.map(key => <div key={key} className={getClassName(key)} onClick={(e) => handleClick(key)}>{key}</div>) }
  </nav>;
}

export { Filter };
