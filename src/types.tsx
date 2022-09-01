export interface ContentNodeType {
  add(node: ContentNodeType): void
  children: ContentNodeType[]
  cleanText: string | null
  parent: ContentNodeType | null
  tag: string | null
  text: string | null
  toJson(): any
}
