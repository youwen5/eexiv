import { Document } from './data'

// export const loadDocument(id: string): Promise<Document> | undefined => {

// }
export const loadAllDocuments = (): Promise<{ [key: string]: Document }> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/documentLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Document }>) => {
        resolve(e.data)
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      reject(
        new Error(
          'Web Workers are not supported in this environment. Please avoid using a prehistoric browser.'
        )
      )
    }
  })
}
