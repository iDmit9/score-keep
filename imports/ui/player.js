import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';


export const Player = (props) => {
    
    let itemClassName = `item item--position-${props.player.rank}`;

    return (
        <div key={props.player._id} className={itemClassName}>
            <div className='player'>
                <div>
                    <h3 className='player__name'>{props.player.name}</h3>
                    <p className='player__stats'>
                        {props.player.position} place - {props.player.score} point(s)
                    </p>
                </div>
                <div className='player__actions'>
                   <button className='button button--round' onClick={() => {
                            Players.update({_id: props.player._id}, {
                                $inc: {score: -1}
                            });
                    }}>-1</button>
                    <button className='button button--round' onClick={() => {
                            Players.update(props.player._id, {
                                $inc: {score: 1}
                            });
                        }}>+1</button>                
                    <button className='button button--round' onClick={() => {
                        Players.remove(props.player._id);
                        }}>X</button> 
                </div>
                            
                
            </div>
        </div>  
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired
}