/* global it, expect, jest */

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers';


it('App renders without crashing', () => {
  const mockFunction = jest.fn();


  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
      deleteTodos={mockFunction}
    />,
  );

  expect(component.exists()).toEqual(true);

});
