import { getDistance } from '../';

function getOrderedLeague({ latitude, longitude, league }) {
  const results = (league.teams || []).reduce((memo, team) => {
    const distance = ~~(getDistance(latitude, longitude, team.location.latitude, team.location.longitude));
    memo.push(Object.assign({}, team, { distance: distance }));
    return memo;
  }, []);

  return Object.assign({}, league, { teams: results.sort((a, b) => a.distance - b.distance) });
}

export { getOrderedLeague };
