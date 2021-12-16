import React from 'react';
import renderer from 'react-test-renderer';
import BlueBorderButton from "../src/components/BlueBorderButton"

test('renders correctly', () => {
  const tree = renderer.create(<BlueBorderButton />).toJSON();
  expect(tree).toMatchSnapshot();
});