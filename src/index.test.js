import ContentWrapper from '.'
import React, { useState } from 'react'
import renderer, { act } from 'react-test-renderer'

const ProxyContentWrapper = (props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div onClick={() => setExpanded(!expanded)} id='test-harness-proxy'>
      <ContentWrapper {...props} expanded={expanded} id='test-harness' />
    </div>
  )
}

describe('ContentWrapper', () => {
  test('is truthy', () => {
    const component = renderer.create(
      <ProxyContentWrapper>hello world</ProxyContentWrapper>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    act(() => {
      /* fire events that update state */
      tree.props.onClick()
    })

    expect(component.toJSON()).toMatchSnapshot()
  })
})
