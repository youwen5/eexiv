import { SearchResult } from 'minisearch'
import { DocumentManifest } from '../db/data'

export interface CustomSearchResult extends SearchResult {
  manifest: DocumentManifest
  abstract: string
}

export default function searchDocs(
  query: string,
  limit = 10
): Promise<CustomSearchResult[]> {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./search.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<CustomSearchResult[]>) => {
        const data = e.data
        resolve(data.slice(0, limit))
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage(query)
    } else {
      reject(
        new Error(
          `Web Workers are not supported in this environment. Please avoid using a prehistoric browser. 
          If nothing else seems wrong, this error message is probably showing up due to ghosts in your browser.`
        )
      )
    }
  })
}
