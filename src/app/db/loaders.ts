import { Affiliation, Author, Document, Nationality, Topic } from './data'

/**
 * Loads a document with the given ID using a web worker if available, and returns a promise that resolves with the document.
 *
 * @param {string} id - The ID of the document to load
 * @return {Promise<Document>} A promise that resolves with the loaded document, or rejects with an error
 */
export const loadDocument = (id: string): Promise<Document> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/documentLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<Document | undefined>) => {
        const data = e.data
        if (!data) {
          return reject(new Error('404'))
        } else {
          resolve(data)
        }
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage(id)
    } else {
      return
    }
  })
}
/**
 * @deprecated This function doesn't improve efficiency and shouldn't be used
 */
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
      return
    }
  })
}

export const loadAllAuthors = (): Promise<{ [key: string]: Author }> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/authorLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Author }>) => {
        resolve(e.data)
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}

export const loadAuthors = (
  authorIds: string[]
): Promise<{ [key: string]: Author }> => {
  'use client'
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/authorLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Author }>) => {
        if (typeof e.data === 'object' && Object.keys(e.data).length > 0) {
          resolve(e.data)
        } else {
          reject(new Error('404'))
        }
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage(authorIds)
    } else {
      return
    }
  })
}

export const loadAffiliation = (id: string): Promise<Affiliation> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/affiliationLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Affiliation }>) => {
        const data = e.data
        const affiliation: Affiliation | undefined = data[id]
        if (!affiliation) {
          return reject(new Error('404'))
        } else {
          resolve(affiliation)
        }
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}

export const loadAllAffiliations = (): Promise<{
  [key: string]: Affiliation
}> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/affiliationLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Affiliation }>) => {
        resolve(e.data)
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}

export const loadTopic = (id: string): Promise<Topic> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/topicLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Topic }>) => {
        const data = e.data
        const topic: Topic | undefined = data[id]
        if (!topic) {
          return reject(new Error('404'))
        } else {
          resolve(topic)
        }
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}

export const loadAllTopics = (): Promise<{
  [key: string]: Topic
}> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/topicLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Topic }>) => {
        resolve(e.data)
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}

export const loadNationality = (id: string): Promise<Nationality> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/nationalityLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Nationality }>) => {
        const data = e.data
        const nationality: Nationality | undefined = data[id]
        if (!nationality) {
          return reject(new Error('404'))
        } else {
          resolve(nationality)
        }
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}

export const loadAllNationalities = (): Promise<{
  [key: string]: Nationality
}> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/topicLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Nationality }>) => {
        resolve(e.data)
        worker.terminate()
      }

      worker.onerror = (error) => {
        reject(error)
        worker.terminate()
      }

      worker.postMessage('LOAD')
    } else {
      return
    }
  })
}
