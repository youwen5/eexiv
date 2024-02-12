import MiniSearch, { SearchResult } from 'minisearch'
import { documents, DocumentManifest } from '../db/data'

const docs = Object.entries(documents).map(([key, value]) => ({
  id: key,
  keywords: value.manifest.keywords.join(' '),
  abstract: value.abstract,
  topics: value.manifest.topics.join(' '),
  authors: value.manifest.authors.join(' '),
  title: value.manifest.title,
  manifest: value.manifest,
  type: value.manifest.type,
}))

const miniSearch = new MiniSearch({
  fields: ['abstract', 'keywords', 'topics', 'authors', 'title', 'type'],
  storeFields: ['key', 'abstract', 'manifest'],
  searchOptions: {
    boost: {
      title: 2,
      keywords: 2,
      topics: 1,
      authors: 2,
    },
    fuzzy: 0.2,
    prefix: true,
  },
})
miniSearch.addAll(docs)

export interface CustomSearchResult extends SearchResult {
  manifest: DocumentManifest
  abstract: string
}

export default function searchDocs(
  query: string,
  limit = 10
): CustomSearchResult[] {
  return miniSearch.search(query).slice(0, limit) as CustomSearchResult[]
}
