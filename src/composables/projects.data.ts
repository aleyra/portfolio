import { createContentLoader, ContentData } from 'vitepress'

const data: ContentData[] = []
export { data }

export default createContentLoader('projects/**/*.md', {})