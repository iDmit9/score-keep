import React from 'react';
import PropTypes from 'prop-types';

import {Player} from './player';

export default class PlayersList extends React.Component {

    renderPlayers() {
        if (this.props.players.length === 0) {
            return <p>Add your first player to get started</p>
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>        
            });
        }        
    }

    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}

PlayersList.propTypes = {
    players: PropTypes.array.isRequired
}