import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

// export default class Player extends React.Component {
//     render() {
//         return <p>Test</p>
//     }
// }

export const Player = (props) => {
    return (
        <p key={props.player._id}>
            {props.player.name} has {props.player.score} point(s) 
            <button onClick={() => {
                    Players.update({_id: props.player._id}, {
                        $inc: {score: -1}
                    });
                }}>-1</button>
            <button onClick={() => {
                    Players.update(props.player._id, {
                        $inc: {score: 1}
                    });
                }}>+1</button>                
            <button onClick={() => {
                Players.remove(props.player._id);
                }}>X</button>
        </p> 
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired
}