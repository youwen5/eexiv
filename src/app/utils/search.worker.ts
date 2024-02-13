import { documents, authors, affiliations, topics } from '@/app/db/data'
import MiniSearch from 'minisearch'
import { CustomSearchResult } from './searchDocs'

// converting the documents object into an array that can be index by minisearch
const docs = Object.entries(documents).map(([key, value]) => ({
  id: key,
  keywords: value.manifest.keywords.join(' '),
  abstract: value.abstract,
  topics: value.manifest.topics
    .map((topicId) => topics[topicId])
    .map((topic) => topic.name)
    .join(' '),
  authors: value.manifest.authors // pull out author data from the user id
    .map((authorId) => authors[authorId])
    .map(
      (author) =>
        `${author.name.first} ${author.name.last} ${author.name.nickname}`
    )
    .join(' '),
  title: value.manifest.title,
  manifest: value.manifest,
  type: value.manifest.type,
  affiliations: value.manifest.authors // pull the affiliation metadata from the author data
    .map((authorId) => authors[authorId])
    .map((author) => author.affiliation)
    .map((affiliationId) =>
      affiliationId
        .map(
          (af) =>
            `${affiliations[af.split('@')[1]].name} ${affiliations[af.split('@')[1]].short}`
        )
        .join(' ')
    )
    .join(' '),
  key: key,
}))

const miniSearch = new MiniSearch({
  fields: [
    'abstract',
    'keywords',
    'topics',
    'authors',
    'title',
    'type',
    'affiliations',
  ],
  storeFields: ['key', 'abstract', 'manifest'],
  searchOptions: {
    boost: {
      title: 3,
      keywords: 2,
      topics: 1,
      authors: 2,
      abstract: 0.3,
    },
    fuzzy: 2,
    prefix: true,
  },
})
miniSearch.addAll(docs)

onmessage = (e: MessageEvent<string>) => {
  postMessage(miniSearch.search(e.data) as CustomSearchResult[])
}
