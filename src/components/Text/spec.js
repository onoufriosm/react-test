import React from 'react'
import Text from './'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Text', () => {
  it('should render children inside a p tag', () => {
    const wrapper = shallow(<Text>This is my first test</Text>)
    const pargraph = wrapper.find('p')
    expect(pargraph).toHaveLength(1)
    expect(pargraph.text()).toEqual('This is my first test')
  })
})