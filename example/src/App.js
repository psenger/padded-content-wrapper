import React, { useState } from 'react';

import ContentWrapper from '@psenger/padded-content-wrapper'

const App = () => {
  const [expanded, setExpand] = useState(false);
  return <React.Fragment>
    <ContentWrapper expanded={expanded}>test</ContentWrapper>
    <button onClick={()=>setExpand(!expanded)}>toggle</button>
  </React.Fragment>
}

export default App
