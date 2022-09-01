import React from 'react'

import TableOfContents from '@tomisin.dev/react-table-of-content-generator'

const App = () => {
  return <TableOfContents
    content="<h2>Heading one</h2><h2>Heading two</h2><h3>Sub heading one</h3><h4>Sub sub heading one</h4><h4>Sub sub heading two</h4><h3>Sub heading two</h3><h2>Heading three</h2>"
  />
}

export default App
