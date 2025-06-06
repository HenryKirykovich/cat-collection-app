import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, TextInput, Button, View } from 'react-native';

// Заглушки для компонентов, чтобы тесты не падали при импорте
const MyScreen = () => <Text>Добро пожаловать</Text>;
const MyForm = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextInput
      placeholder="Введите имя..."
      value={value}
      onChangeText={setValue}
      testID="name-input"
    />
  );
};
const MyComponent = ({ onPress }: { onPress: () => void }) => (
  <Button title="Сохранить" onPress={onPress} />
);
const IconComponent = () => <View testID="main-icon" />;

// Импортируйте CatContext и HomeScreen из вашего приложения
import { CatContext } from '../context/CatContext';
const HomeScreen = () => <Text>HomeScreen</Text>; // Заглушка, замените на реальный компонент

// 1. Проверка, что текст отобразился
test('отображается заголовок', () => {
  const { getByText } = render(<MyScreen />);
  expect(getByText('Добро пожаловать')).toBeTruthy();
});

// 2. Проверка ввода в текстовое поле
test('пользователь вводит имя', () => {
  const { getByPlaceholderText } = render(<MyForm />);
  const input = getByPlaceholderText('Введите имя...');
  fireEvent.changeText(input, 'Henry');
  expect(input.props.value).toBe('Henry');
});

// 3. Проверка нажатия кнопки и вызова коллбэка
test('при нажатии вызывается действие', () => {
  const mockFn = jest.fn();
  const { getByText } = render(<MyComponent onPress={mockFn} />);
  fireEvent.press(getByText('Сохранить'));
  expect(mockFn).toHaveBeenCalled();
});

// 4. Проверка фильтрации по вводу
test('список фильтруется по вводу', () => {
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
  };

  // Заглушка для поля поиска
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
    <CatContext.Provider value={mockContext as any}>
      <SearchScreen />
    </CatContext.Provider>
  );

  fireEvent.changeText(getByPlaceholderText("Search cat's breed..."), 'Main');

  expect(queryByText('Main Coon')).toBeTruthy();
  expect(queryByText('Siamese')).toBeNull();
});

// 5. Проверка по testID
test('элемент найден по testID', () => {
  const { getByTestId } = render(<IconComponent />);
  expect(getByTestId('main-icon')).toBeTruthy();
});