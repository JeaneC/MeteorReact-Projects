import React from 'react';
import { Players } from '../api/players'


export default class AddPlayer extends React.Component {
  handleSubmit = (e) => {
    let { value } = e.target.playerName

    e.preventDefault(); //Stops page freshing

    if (value) {
      // Insert new doc into client collection
      Players.insert({
        name: value,
        score: 0
      });

      e.target.playerName.value = '';
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player</button>
        </form>
      </div>

    );
  }


}
