# @tomisin.dev/react-table-of-content-generator

A simple and hassle-free table of content component for HTML and Markdown based contents, for ReactJS applications.

[![NPM](https://img.shields.io/npm/v/@tomisin.dev/react-table-of-content-generator.svg)](https://www.npmjs.com/package/@tomisin.dev/react-table-of-content-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @tomisin.dev/react-table-of-content-generator
```

## Usage

```tsx
import React, { Component } from 'react'

import TableOfContents from '@tomisin.dev/react-table-of-content-generator'

class Example extends Component {
  render() {
    return <TableOfContents
      content="<h2>Heading one</h2><h2>Heading two</h2><h3>Sub heading one</h3><h4>Sub sub heading one</h4><h4>Sub sub heading two</h4>"
    />
  }
}
```

## License

MIT © [CodeLexis](https://github.com/CodeLexis)
