import React from 'react';
import renderer from 'react-test-renderer';
import LightBorderButton from "../src/components/LightBorderButton"

test('renders correctly', () => {
  const tree = renderer.create(<LightBorderButton />).toJSON();
  expect(tree).toMatchSnapshot();
});