import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from "react-router-dom";

import { createFakeCharacter } from '../test/fakes/character.fake';
import CharacterFormStatBlock from './CharacterFormStatBlock';

it('renders correctly', () => {
  // Arrange
  const character = createFakeCharacter(1234);

  const props = {
    stats: character.consequences,
    tableName: 'expected table name'
  }

  // Act
  const result = render(
        <CharacterFormStatBlock {...props} />
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
