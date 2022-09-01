import * as React from 'react'
import { useEffect, useState } from 'react'

import { ContentNodeType } from './types'
import generateTableOfContent from './generators/html'

interface Props {
  content: string
}

interface TableOfContentTreeProps {
  node: ContentNodeType
}

const createIdForTableOfContentHeading = (heading: string) => {
  if (!heading) {
    return
  }

  return encodeURIComponent(heading.toLowerCase().replaceAll(' ', '-'))
}

const TableOfContentTree = ({ node }: TableOfContentTreeProps) => {
  if (node === null || node === undefined) return <React.Fragment />

  return (
    <React.Fragment>
      {node.cleanText && (
        <li>
          <a href={`#${createIdForTableOfContentHeading(node.cleanText)}`}>
            {node.cleanText}
          </a>
        </li>
      )}
      {node.children && node.children.length > 0 && (
        <ul>
          {node.children.map((value: ContentNodeType) => (
            <TableOfContentTree key={value.cleanText} node={value} />
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

const TableOfContent = ({ content }: Props) => {
  const [tableOfContentRoot, setTableOfContentRoot] = useState<
    ContentNodeType | undefined
  >()

  useEffect(() => {
    const tableOfContentsRoot = generateTableOfContent(content)
    setTableOfContentRoot(tableOfContentsRoot)
  }, [content])

  return (
    <div>
      <div>
        {tableOfContentRoot !== undefined && (
          <TableOfContentTree node={tableOfContentRoot} />
        )}
      </div>
    </div>
  )
}

export default TableOfContent
