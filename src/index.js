import React from 'react';

const ContentWrapper = ( {children, expanded} ) => (<div style={{paddingLeft: expanded?240:64}} >{children}</div>);

export default ContentWrapper;
