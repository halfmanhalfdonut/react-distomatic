import React from 'react';

import './league.css';
import { Team } from '../';

function League(props) {
  function getName(league, version) {
    return version === 'short' ? league.shortName : league.fullName;
  }

  function getTeams(teams) {
    return teams.map((team, i) => <li key={`team-${i}`} className="team-item">
      <Team data={ team } />
    </li>);
  }

  const { league } = props;
  const shortName = getName(league, 'short').toLowerCase();
  return <section className={ `league league-${shortName}`}>
    <a name={ shortName }>&nbsp;</a>
    <header className="league-header">
      <h2 className="league-name">
        { getName(league) }
        <a className="league-link" href={ league.website } target="league_website">
          <i className="fas fa-external-link-alt"></i>
        </a>
      </h2>
    </header>
    <ol className="teams">
      { getTeams(league.teams) }
    </ol>
  </section>;
}

export { League };
