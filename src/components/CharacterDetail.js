/* eslint no-alert: "off" */
import React, { useContext, useState, useEffect } from 'react';
import './CharacterDetail.css';
import { Link } from 'react-router-dom';
import CharacterStatBlock from './CharacterStatBlock';
import StressBox from './StressBox';
import { AuthContext } from '../auth/Auth';

const CharacterDetail = (props) => {
  const { currentUser } = useContext(AuthContext);

  const [foundCharacter, setFoundCharacter] = useState(![]);

  useEffect(() => {
    setFoundCharacter(props.characters.find(
      (character) => parseInt(props.match.params.characterId) === character.id,
    ));
  }, [props.characters, props.match.params.characterId]);

  if (!foundCharacter) { return <p>Loading</p>; }

  const characterStunts = foundCharacter.stunts.map((stunt) => (
    <li key={stunt} className="stunt-entry">{ stunt }</li>
  ));

  const handleCharacterDeletion = () => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      props.deleteCharacter(foundCharacter);
      props.history.push('/');
    }
  };

  const editCharacterButton = currentUser
    ? <Link className="primary-button" to={`/character/${foundCharacter.id}/edit`}>Edit</Link> : null;

  const deleteCharacterButton = currentUser
    ? <button className="primary-button danger-button" type="submit" onClick={handleCharacterDeletion}>Delete</button>
    : null;

  return (
    <main className={`character-sheet character-sheet-text ${currentUser ? null : 'top-padding'}`}>
      <section className="character-stats">
        <h1 className="character-name character-sheet-item-primary">{ foundCharacter.name }</h1>
        <h5 className="character-sheet-header refresh-header character-sheet-text">
          Refresh:
          { foundCharacter.refresh }
        </h5>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <CharacterStatBlock characterStatCategory="Aspects" characterStats={foundCharacter.aspects} ordered statBlock="primary" />
        </article>
        <article className="character-sheet-item-secondary">
          <CharacterStatBlock characterStatCategory="Approaches" characterStats={foundCharacter.approaches} statBlock="secondary" />
        </article>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <h5 className="character-sheet-header stunt-header character-sheet-text table-header">Stunts</h5>
          <ul className="stunt-list">
            { characterStunts }
          </ul>
        </article>
      </section>
      <section className="character-stats">
        <article className="character-sheet-item-primary">
          <CharacterStatBlock characterStatCategory="Consequences" characterStats={foundCharacter.consequences} statBlock="primary" />
        </article>
        <article className="character-sheet-item-secondary">
          <StressBox />
        </article>
      </section>
      { editCharacterButton }
      { deleteCharacterButton }
    </main>
  );
};
export default CharacterDetail;
