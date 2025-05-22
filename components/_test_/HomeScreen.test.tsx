import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../app/(tabs)/index';
import React from 'react';
import { CatContext } from '../../components/context/CatContext';

const mockCats = [
  { id: '1', title: 'Main Coon', favorite: false },
  { id: '2', title: 'Persian', favorite: false },
];

test('filters and displays specific cat', () => {
  const mockContext = {
    cats: mockCats,
    addCat: async () => null,
    removeCat: () => {},
    updateCat: () => {},
    selectedCat: null,
    setSelectedCat: () => {},
    favorites: [],
    toggleFavorite: () => {},
  };

  const { getByPlaceholderText, queryByText } = render(
    <CatContext.Provider value={mockContext}>
      <HomeScreen />
    </CatContext.Provider>,
  );

  const searchInput = getByPlaceholderText("Search cat's breed...");
  fireEvent.changeText(searchInput, 'Main');

  expect(queryByText('Main Coon')).toBeTruthy();
  expect(queryByText('Persian')).toBeNull(); // optional: pass if dont show my  Persian. Checking comptability
});
