import React from 'react';

const ContentWrapper = ( {children, expanded} ) => (<div className={expanded?'content-wrapper-expanded':'content-wrapper-collapsed'}>{children}</div>);

export default ContentWrapper;
