import React from 'react';
import renderer from 'react-test-renderer';
import SliderButtonComponent from "../src/components/SliderButtonComponent"

test('renders correctly', () => {
  const tree = renderer.create(<SliderButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});