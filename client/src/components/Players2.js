import React from 'react';
import Player from './Player';
import useMountFetchState from '../hooks/useMountFetchState';


function Players2() {
  
  const [players, setPlayers] = useMountFetchState(
    [],
    'http://192.168.1.203:5000/api/players'
  );

  return (
    <>
      <h1>Second Players Component (functional)</h1>
      {players && players.slice(0, 10).map(player => (
        <Player player={player} key={player.id} />
      ))}
    </>
  );
}
export default Players2;
