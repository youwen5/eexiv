import { documents, authors, affiliations, topics } from '@/app/db/data'
import MiniSearch from 'minisearch'
import { CustomSearchResult } from './searchDocs'
import hash from './hash'
import { hash as fnv } from 'fnv-plus'
import { Document } from '../db/data'

const miniSearch = new MiniSearch({
  fields: [
    'abstract',
    'keywords',
    'topics',
    'authors',
    'title',
    'type',
    'affiliations',
    'citation',
    'doi',
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
    fuzzy: 0.2,
    prefix: true,
  },
})

const serializeDoc = (key: string, value: Document) => ({
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
  doi: value.doi ? value.doi : undefined
})

onmessage = (e: MessageEvent<string>) => {
  // check if searching for eeXiv citation
  if (e.data.toLowerCase().startsWith('eexiv:')) {
    const id = e.data.slice(6)

    if (id.length !== 12) {
      postMessage([])
    } else {
      const base = id.slice(0, 10)
      const ending = id.slice(10, 12)
      const e_ending = fnv(base).str().substring(0, 2)

      if (ending !== e_ending) {
        postMessage([])
      }
    }

    Object.keys(documents).forEach((key) => {
      if (documents[key].citation === id) {
        postMessage([serializeDoc(key, documents[key])])
      }

      const hashed = hash(key)
      if (hashed === id) {
        postMessage([serializeDoc(key, documents[key])])
      }
    })
  }

  // converting the documents object into an array that can be index by minisearch
  const docs = Object.entries(documents).map(([key, value]) => (serializeDoc(key, value)))

  miniSearch.addAll(docs)
  postMessage(miniSearch.search(e.data) as CustomSearchResult[])
}
