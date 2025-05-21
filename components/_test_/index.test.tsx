import React from  'react';
import HomeScreen from  '../../app/(tabs)/index';
import {render, fireEvent} from '@testing-library/react-native';


test ('render header test', () => {
    const {getByText} = render (<HomeScreen/>);
    expect (getByText("Cat's breed")).toBeTruthy();
})
