import * as React from 'react'
import { useEffect, useState } from 'react'
import generateTableOfContent from './generators/html'

// import styles from './styles.module.css'
import { ContentNodeType } from './types'

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

const TableOfContentsTree = ({ node }: TableOfContentTreeProps) => {
  console.log(
    `At ${node.cleanText || 'root'} with children ${JSON.stringify(
      node.children?.map((_) => _.cleanText)
    )}`
  )

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
            <TableOfContentsTree key={value.cleanText} node={value} />
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

const TableOfContents = ({ content }: Props) => {
  const [tableOfContentsRoot, setTableOfContentsRoot] = useState<
    ContentNodeType | undefined
  >()

  useEffect(() => {
    const tableOfContentsRoot = generateTableOfContent(content)
    setTableOfContentsRoot(tableOfContentsRoot)
  }, [content])

  return (
    <div>
      <div>
        {tableOfContentsRoot !== undefined && (
          <TableOfContentsTree node={tableOfContentsRoot} />
        )}
      </div>
    </div>
  )
}

export default TableOfContents
