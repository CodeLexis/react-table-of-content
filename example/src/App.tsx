import React from 'react'

import TableOfContent from '@tomisin.dev/react-table-of-content'

const htmlContent = `<html>
  <article>
    <h2>Heading One</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <h2>Heading Two</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2>Heading Three</h2>
    <h3>Sub heading one</h3>
    <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h3>Sub heading two</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h4>Sub sub heading one</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h4>Sub sub heading two</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
</html>
`;

const App = () => {
  return <TableOfContent content={htmlContent} />
}

export default App
