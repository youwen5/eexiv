import { documents } from '@/app/db/data'
import MiniSearch from 'minisearch'
import { CustomSearchResult } from './searchDocs'

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

onmessage = (e: MessageEvent<string>) => {
  postMessage(miniSearch.search(e.data) as CustomSearchResult[])
}
