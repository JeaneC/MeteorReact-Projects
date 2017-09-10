import React from 'react';
import { Players } from '../api/players'


export default class Player extends React.Component {

  render() {
    let { _id, name, score, key, rank, position } = this.props.player
    let itemClassName = `item item--position-${rank}`;

    onDecrease = () => Players.update({_id: _id}, {$inc: {score: -1}});
    onIncrease = () => Players.update({_id: _id}, {$inc: {score: 1}});
    onRemove = () => Players.remove({_id: _id});

    return (
        <div key={_id} className={itemClassName}>
          <div className="player">
            <div>
              <h3 className="player__name">{name}</h3>
              <p className="player__stats">
                {position} Place - {score} point(s).
              </p>
            </div>
            <div className="player_-actions">
              <button className="button button--round" onClick={onDecrease}>-1</button>
              <button className="button button--round" onClick={onIncrease}>+1</button>
              <button className="button button--round" onClick={onRemove}>X</button>
            </div>

          </div>
        </div>
    );
  }


}
