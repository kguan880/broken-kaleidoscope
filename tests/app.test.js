import React from 'react'
import {mount, shallow} from 'enzyme'

import App from '../client/components/App'

describe('<App />', () => {
  test('color box div shows in app', () => {
    const expected = 'div'
    const wrapper = mount(<App />)
    expect(wrapper.html()).toMatch(expected)
  })

  test('color changes to green onClick', () => {
    const expected = 'background-color: "green"'
    const wrapper = mount(<App />)
    console.log(wrapper.find('div').first().html())
    expect(wrapper.find('div').at(0).html().simulate('click')).toMatch(expected)
  })
})
