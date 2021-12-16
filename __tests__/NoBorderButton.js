import React from 'react';
import renderer from 'react-test-renderer';
import NoBorderButton from "../src/components/NoBorderButton"

test('renders correctly', () => {
  const tree = renderer.create(<NoBorderButton />).toJSON();
  expect(tree).toMatchSnapshot();
});