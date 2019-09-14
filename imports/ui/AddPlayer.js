import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {

    handleSubmit(e) {

        let playerName = e.target.playerName.value;
    
        e.preventDefault();
    
        if (playerName.trim()) {
            Players.insert({
                name: e.target.playerName.value.trim(),
                score: 0
            });
            e.target.playerName.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' name='playerName' placeholder='Player name' />
                <button>Add player</button>
            </form> 
        )
    }        
}