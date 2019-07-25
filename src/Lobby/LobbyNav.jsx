import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import GameInfo from './GameInfo.jsx';
import PlayerList from './PlayerList.jsx';
import openSocket from 'socket.io-client';

const socketClient = openSocket('http://localhost:3001');
class LobbyNav extends Component {
  constructor() {
    super();
    this.socket = socketClient;
  }

  componentDidMount() {
    this.socket.emit('test');
    this.socket.on('test', function(msg) {
      console.log('connected to server');
    })
  }

  render() {
    const filmElement = <FontAwesomeIcon icon={faFilm} />
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-brand" href="/">
              {filmElement}MovieGuesser
            </a>
        </nav>
        <div className="lobby-main">
          <div className="game-info">
            <GameInfo />
          </div>
          <div className="player-list">
            <PlayerList />
          </div>
        </div>
      </div>
    );
  }
}


export default LobbyNav;