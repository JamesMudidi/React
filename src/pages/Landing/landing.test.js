import React from 'react';
import { shallow } from 'enzyme';
import Landing from 'pages/Landing';

// test to check if the home component matches the snapshot
describe('Login Component', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Landing />);
    expect(component).toMatchSnapshot();
  });
});
