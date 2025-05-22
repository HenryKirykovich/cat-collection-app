// 1.b. The list is filtered when a user types into the search input

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../app/(tabs)/index';
import { CatContext } from '../context/CatContext'; // import CatContext for creating my own BD

const mockCats = [
  // creating DB the same or put all paramtrs or less for particular task
  { id: '1', title: 'Main Coon' },
  { id: '2', title: 'Siberian' },
  { id: '3', title: 'Persian' },
];

const mockContext = {
  // wraped mockCat to Context
  cats: mockCats,
  addCat: async () => null,
  removeCat: () => {},
  updateCat: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
  favorites: [],
  toggleFavorite: () => {},
};

test('1.b. The list is filtered when a user types into the search input', () => {
  const { getByPlaceholderText, queryByText } = render(
    // wraped mockContext to provider for real passing to HomeScreen
    <CatContext.Provider value={mockContext}>
      <HomeScreen />
    </CatContext.Provider>,
  );

  // action what should test do ...
  const searchInput = getByPlaceholderText("Search cat's breed...");
  fireEvent.changeText(searchInput, 'Main');

  expect(queryByText('Main Coon')).toBeTruthy();
  expect(queryByText('Siberian')).toBeNull();
  expect(queryByText('Persian')).toBeNull();
});
