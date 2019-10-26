import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SimpleButton from '../SimpleButton';

configure({ adapter: new Adapter() });

describe('<SimpleButton />', () => {
  it('renders a SimpleTable', () => {
    const wrapper = shallow(<SimpleButton />);
    expect(wrapper).toBe.truthy;
  });

  it('passes only the label to the SimpleButton', () => {
    const wrapper = mount(<SimpleButton label="Submit" />);
    expect(wrapper.contains(<span>Submit</span>)).toEqual(true);
  });
});
