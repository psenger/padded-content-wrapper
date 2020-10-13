import React from 'react'
import PropTypes from 'prop-types'

const ContentWrapper = ({ children, expanded, id }) => (
  <div
    className={
      expanded ? 'content-wrapper-expanded' : 'content-wrapper-collapsed'
    }
    id={id}
  >
    {children}
  </div>
)

ContentWrapper.prototype = {
  expanded: PropTypes.bool,
  children: PropTypes.element
}

ContentWrapper.defaultProps = {
  children: null
}

export default ContentWrapper
