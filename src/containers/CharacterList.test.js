/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { createFakeCharacter } from '../models/Character/__test__/character.fake';
import CharacterList from './CharacterList';

it('renders correctly', () => {
  // Arrange
  const props = {
    characters: [createFakeCharacter(1234)],
  };

  // Act
  const result = render(
    <MemoryRouter>
      <CharacterList {...props} />
    </MemoryRouter>,
  );

  // Assert
  expect(result.asFragment()).toMatchSnapshot();
});
