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

class Example extends Component {
  render() {
    return <TableOfContent
      content="<h2>Heading one</h2><h2>Heading two</h2><h3>Sub heading one</h3><h4>Sub sub heading one</h4><h4>Sub sub heading two</h4>"
    />
  }
}
```

### Functional Component
```tsx
import React from 'react'

import TableOfContent from '@tomisin.dev/react-table-of-content'

const App = () => {
  return <TableOfContent
    content="<h2>Heading one</h2><h2>Heading two</h2><h3>Sub heading one</h3><h4>Sub sub heading one</h4><h4>Sub sub heading two</h4>"
  />
}
```

## License

MIT © [CodeLexis](https://github.com/CodeLexis)
