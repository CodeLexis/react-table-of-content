# @tomisin.dev/react-table-of-content

A simple and hassle-free table of content component for HTML based contents, in ReactJS applications.

[![NPM](https://img.shields.io/npm/v/@tomisin.dev/react-table-of-content.svg)](https://www.npmjs.com/package/@tomisin.dev/react-table-of-content) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @tomisin.dev/react-table-of-content
```

## Usage
### Class Component
```tsx
import React, { Component } from 'react'

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
`

class Example extends Component {
  render() {
    return <TableOfContent
      content={htmlContent}
    />
  }
}
```

### Functional Component
```tsx
...

const App = () => {
  return <TableOfContent
    content={htmlContent}
  />
}
```

## Screenshots
### Input
![a sample HTML page showing an article that has several header tags](/blobs/screenshot_input.png "article that has several header tags")

### Output
![a sample HTML page depicting the header tags extracted from the article](/blobs/screenshot_output.png "generated table of contents")

## License

MIT © [CodeLexis](https://github.com/CodeLexis)
