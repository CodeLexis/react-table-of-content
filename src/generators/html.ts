import type { ContentNodeType } from '../types'

const HEADING_TAGS = ['', '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>']

class ContentNode implements ContentNodeType {
  children: ContentNodeType[] = []
  parent: ContentNodeType | null = null
  tag: string | null = null
  text: string | null = null

  constructor(tag: string, text: string, children = [], parent = null) {
    this.tag = tag
    this.text = text
    this.children = children
    this.parent = parent
  }

  get cleanText(): string | null {
    const result = this.text

    if (result == null) {
      return null
    }

    return result.slice(4, result?.length - 5)
  }

  toJson(): any {
    return {
      [this.text?.slice(4, this.text?.length - 5) || '']: this.children.map(
        (value) => value.toJson()
      )
    }
  }

  add(node: ContentNodeType) {
    node.parent = this
    this.children.push(node)
  }

  getParent(prev: ContentNodeType): ContentNodeType {
    while (true) {
      if (
        prev.parent == null ||
        HEADING_TAGS.indexOf(prev.tag || '') <
          HEADING_TAGS.indexOf(this.tag || '')
      ) {
        return prev
      }

      prev = prev.parent
    }
  }

  padding(count: number, segment: string) {
    let result = ''
    const i = 0

    while (i < count) {
      result += segment
      count += 1
    }

    return result
  }
}

function cleanup(htmlMarkup: string): string {
  htmlMarkup = htmlMarkup.trim()

  if (!htmlMarkup) {
    return htmlMarkup
  }

  if (htmlMarkup.startsWith('<h4>')) {
    let a = htmlMarkup.split('</h4>')
    a = a.slice(1)
    return a.join('</h4>')
  } else if (htmlMarkup.startsWith('<h3>')) {
    let a = htmlMarkup.split('</h3>')
    a = a.slice(1)
    return a.join('</h3>')
  }

  return htmlMarkup
}

export default function generateTableOfContent(
  htmlMarkup: string
): ContentNodeType {
  htmlMarkup = cleanup(htmlMarkup)

  const root = new ContentNode('', '')
  let prev = root

  let interimTag: string | null = null
  let interimText: string | null = null
  let i = 0

  while (i < htmlMarkup.length) {
    if (
      htmlMarkup[i] === '<' &&
      HEADING_TAGS.includes(htmlMarkup.slice(i, i + 4))
    ) {
      interimTag = htmlMarkup.slice(i, i + 4)
      interimText = htmlMarkup.slice(i, i + 4)
      i += 4
      continue
    } else if (
      interimTag != null &&
      htmlMarkup[i] === '<' &&
      htmlMarkup.slice(i, i + 5) === '</' + interimTag.slice(1)
    ) {
      interimText += htmlMarkup.slice(i, i + 5)

      const newNode: ContentNode = new ContentNode(
        interimTag,
        interimText || ''
      )
      const parent: ContentNodeType = newNode.getParent(prev)
      parent.add(newNode)
      prev = newNode

      interimText = null
      i += 5
      continue
    } else if (interimText != null) {
      interimText += htmlMarkup[i]
    }

    i += 1
  }

  return root
}

// root = enerateTableOfContent(SAMPLE);
