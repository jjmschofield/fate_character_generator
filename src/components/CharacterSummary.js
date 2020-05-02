import React from 'react'
import './CharacterSummary.css'
import { Link } from 'react-router-dom'

const CharacterSummary = (props) => {

  const handleCharacterDeletion = () => {
    props.deleteCharacter(props.characterDetails)
  }

  return (
    <li className="characterSummaryTile">
      <Link className="character-link" to={`/character/${props.characterDetails.id}`}>
        <h3>{props.characterDetails.name}</h3>
        <p>{props.characterDetails.highConcept}</p>
        <p>{props.characterDetails.trouble}</p>
      </Link>
      <button className="delete-button" onClick={handleCharacterDeletion}>Delete</button>
    </li>
  )
}

export default CharacterSummary
