import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';


const renderPlayers = (playersList) => {

  console.log(playersList)

  return newNumbers = playersList.map( player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => {
          Players.update({_id: player._id}, {
            $inc: {score: -1}
          });
        }}>-1</button>
        <button onClick={() => {
          Players.update({_id: player._id}, {
            $inc: {score: 1}
          });
        }}>+1</button>
        <button onClick={() => {
            Players.remove({_id: player._id});
          }}>X</button>
      </p>
  )
  });

}

const handleSubmit = (e) => {
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
};

Meteor.startup(() => {


  Tracker.autorun( () => {
    let players = Players.find().fetch();
    let name = 'John';
    let title = 'Score Keep'

    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
      {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
        <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });



});
