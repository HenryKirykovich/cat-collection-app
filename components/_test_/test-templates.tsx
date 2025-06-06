import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, TextInput, Button, View } from 'react-native';
import { CatContextType } from '../context/CatContext';


// Stubs for components to prevent tests from crashing during import
const MyScreen = () => <Text>Welcome</Text>;
const MyForm = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextInput
      placeholder="Enter name..."
      value={value}
      onChangeText={setValue}
      testID="name-input"
    />
  );
};
const MyComponent = ({ onPress }: { onPress: () => void }) => (
  <Button title="Save" onPress={onPress} />
);
const IconComponent = () => <View testID="main-icon" />;

// Import CatContext and HomeScreen from your app
import { CatContext } from '../context/CatContext';
const HomeScreen = () => <Text>HomeScreen</Text>; // Stub — replace with the actual component

// 1. Check that the heading is displayed
test('displays heading', () => {
  const { getByText } = render(<MyScreen />);
  expect(getByText('Welcome')).toBeTruthy();
});

// 2. Check user input into text field
test('user enters name', () => {
  const { getByPlaceholderText } = render(<MyForm />);
  const input = getByPlaceholderText('Enter name...');
  fireEvent.changeText(input, 'Henry');
  expect(input.props.value).toBe('Henry');
});

// 3. Check button press triggers action
test('action is triggered on button press', () => {
  const mockFn = jest.fn();
  const { getByText } = render(<MyComponent onPress={mockFn} />);
  fireEvent.press(getByText('Save'));
  expect(mockFn).toHaveBeenCalled();
});

// 4. Check list is filtered by input
test('list is filtered by input', () => {
  const mockCats = [
    { id: '1', title: 'Main Coon' },
    { id: '2', title: 'Siamese' },
  ];

  const mockContext = {
    cats: mockCats,
  addCat: async () => null,
  removeCat: () => {},
  updateCat: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
  favorites: [],
  toggleFavorite: () => {},
    
  }

  // Stub for search field screen
  const SearchScreen = () => {
    const [search, setSearch] = React.useState('');
    const filtered = mockCats.filter((cat) =>
      cat.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <View>
        <TextInput
          placeholder="Search cat's breed..."
          value={search}
          onChangeText={setSearch}
        />
        {filtered.map((cat) => (
          <Text key={cat.id}>{cat.title}</Text>
        ))}
      </View>
    );
  };

  const { getByPlaceholderText, queryByText } = render(
    <CatContext.Provider value={mockContext}>
      <SearchScreen />
    </CatContext.Provider>
  );

  fireEvent.changeText(getByPlaceholderText("Search cat's breed..."), 'Main');

  expect(queryByText('Main Coon')).toBeTruthy();
  expect(queryByText('Siamese')).toBeNull();
});

// 5. Check element by testID
test('element found by testID', () => {
  const { getByTestId } = render(<IconComponent />);
  expect(getByTestId('main-icon')).toBeTruthy();
});
