import React from 'react';

import './team.css';

function Team(props) {
  function getConference(team) {
    let text = '';
    if (team.conference) {
      text = `${team.conference} Conference`;
    }
    return text;
  }

  function getDivision(team) {
    let text = '';
    if (team.division) {
      text = `${team.division} Division`;
    }
    return text;
  }

  function getName(team) {
    let heading = team.city;
    let subheading = team.name;

    if (team.isNicknameFirst) {
      heading = team.name;
      subheading = team.city;
    }

    return <React.Fragment>
      <h3 className="team-name-heading">{ heading }</h3>
      <h4 className="team-name-subheading">{ subheading }</h4>
    </React.Fragment>;
  }

  function getAddress(team) {
    let location = team.location;
    return <React.Fragment>
      <i className="fas fa-map-marker-alt"></i>
      <a className="team-link" href={ `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`} target="team_location">{location.address}</a>
    </React.Fragment>;
  }

  function getDistance(team) {
    return `${Math.round(team.distance * 0.62137119)} miles`;
  }

  function getColors(team) {
    let teamColors = team.colors;
    let width = (100 / teamColors.length).toFixed(2);

    return teamColors.map((color, i) => <span key={`color-${i}`} className="team-color" style={{ backgroundColor: `${color}`, width: `${width}%`}}></span>);
  }

  function getWebsite(team) {
    return <a href={team.website} target="team_web" className="team-link">
      Team Website <i className="fas fa-external-link-alt"></i>
    </a>;
  }

  const team = props.data;
  return <div className="team">
    <div className="team-meta">
      <div className="team-conference">{getConference(team)}</div>
      <div className="team-division">{getDivision(team)}</div>
    </div>
    <div className="team-name">{getName(team)}</div>
    <div className="distance">{getDistance(team)} away</div>
    <div className="team-meta team-links">
      <div className="address">{getAddress(team)}</div>
      <div className="team-website">{getWebsite(team)}</div>
    </div>
    <div className="color-bar">{getColors(team)}</div>
  </div>;
}

export { Team }
