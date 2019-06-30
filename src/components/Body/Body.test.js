import React from 'react';
import { shallow } from 'enzyme';
import Body from 'components/Body';

describe('Body', () => {
  it('matches the snapshot', () => {
    const component = shallow(<Body />);
    expect(component).toMatchSnapshot();
  });
});
