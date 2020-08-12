import React from 'react'
import CharacterSummary from '../components/CharacterSummary'
import './CharacterList.css'
import '../App.css'
import { auth } from "../fire"

const CharacterList = (props) => {

  const characterList = props.characters ? props.characters.map(character =>{
    return (
      <CharacterSummary characterDetails={character} key={character.id} deleteCharacter={props.deleteCharacter}/>
    )
  }) : null

  return (
    <main>
      <h1>Welcome to the Fate Accelerated Character Manager!</h1>
      <ul className="characterList">
        {characterList}
      </ul>
      <button className="primary-button" onClick={() => auth.signOut()}>Sign out</button>
    </main>
  )
}

export default CharacterList