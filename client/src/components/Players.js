import React from 'react';
import axios from 'axios';
import Player from './Player';

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    this.getPlayerData();
  }

  getPlayerData = () => {
    axios.get('http://192.168.1.203:5000/api/players').then(response => {
      this.setState({
        players: response.data
      });
    });
  }

  render() {
    return (
      <>
        <h1>First Players Component (class based)</h1>
        {this.state.players && this.state.players.slice(0, 10).map(player => (
          <Player player={player} key={player.id} />
        ))}
      </>
    );
  }
};
export default Players;
