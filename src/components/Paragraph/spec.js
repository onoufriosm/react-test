import React from 'react'
import Paragraph from './'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Paragraph', () => {
  it('should render children inside a p tag', () => {
    const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
    const pargraph = wrapper.find('p')
    expect(pargraph).toHaveLength(1)
    expect(pargraph.text()).toEqual('This is my first test')
  })
})