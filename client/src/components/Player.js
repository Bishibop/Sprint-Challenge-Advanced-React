import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div className='player'>
        <p>
          <strong>Name: {this.props.player.name}</strong>
        &nbsp;- {this.props.player.country} : {this.props.player.searches}
        </p>
      </div>
    );
  }
};
export default Player;
