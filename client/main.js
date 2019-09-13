import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

// const players = [{
//     _id: '1',
//     name: 'Godzilla',
//     score: 99
// }, {
//     _id: '2',
//     name: 'Java',
//     score: -1
// }, {
//     _id: '3',
//     name: 'Dmitriy',
//     score: -12
// }];

const renderPlayers = (playersList) => {    
    return playersList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s) 
                <button onClick={() => {
                        Players.update({_id: player._id}, {
                            $inc: {score: -1}
                        });
                    }}>-1</button>
                <button onClick={() => {
                        Players.update(player._id, {
                            $inc: {score: 1}
                        });
                    }}>+1</button>                
                <button onClick={() => {
                    Players.remove(player._id);
                    }}>X</button>
            </p> 
        );
    })
}

const handleSubmit = (e) => {

    let playerName = e.target.playerName.value;

    e.preventDefault();

    if (playerName.trim()) {
        Players.insert({
            name: e.target.playerName.value.trim(),
            score: 0
        });
        e.target.playerName.value = '';
    }
};

Meteor.startup(() => {    

    Tracker.autorun(() => {

        let players = Players.find().fetch()

        let title = 'Score keep';
        let name = 'Dmitriy';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}!</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type='text' name='playerName' placeholder='Player name' />
                    <button>Add player</button>
                </form>
            </div>);
        ReactDOM.render(jsx, document.getElementById('app'));
    });    
    
});