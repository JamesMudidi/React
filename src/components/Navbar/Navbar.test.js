import React from 'react';
import { shallow } from 'enzyme';
import Head from 'components/Navbar';

describe('Head', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Head />);
    expect(component).toMatchSnapshot();
  });
});
