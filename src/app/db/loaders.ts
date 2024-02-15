import { Document, Author, Affiliation, Topic, Nationality } from './data'

export const loadDocument = (id: string): Promise<Document> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/documentLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Document }>) => {
        const data = e.data
        const doc: Document | undefined = data[id]
        if (!doc) {
          return reject(new Error('404'))
        } else {
          resolve(doc)
        }
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

export const loadAuthor = (id: string): Promise<Author> => {
  return new Promise((resolve, reject) => {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/authorLoader.worker.ts', import.meta.url),
        { type: 'module' }
      )

      worker.onmessage = (e: MessageEvent<{ [key: string]: Author }>) => {
        const data = e.data
        const author: Author | undefined = data[id]
        if (!author) {
          return reject(new Error('404'))
        } else {
          resolve(author)
        }
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
          `Web Workers are not supported in this environment. Please avoid using a prehistoric browser. 
          If nothing else seems wrong, this error message is probably showing up due to ghosts in your browser.`
        )
      )
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
      reject(
        new Error(
          `Web Workers are not supported in this environment. Please avoid using a prehistoric browser. 
          If nothing else seems wrong, this error message is probably showing up due to ghosts in your browser.`
        )
      )
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
      reject(
        new Error(
          'Web Workers are not supported in this environment. Please avoid using a prehistoric browser.'
        )
      )
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
      reject(
        new Error(
          `Web Workers are not supported in this environment. Please avoid using a prehistoric browser. 
          If nothing else seems wrong, this error message is probably showing up due to ghosts in your browser.`
        )
      )
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
      reject(
        new Error(
          'Web Workers are not supported in this environment. Please avoid using a prehistoric browser.'
        )
      )
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
      reject(
        new Error(
          `Web Workers are not supported in this environment. Please avoid using a prehistoric browser. 
          If nothing else seems wrong, this error message is probably showing up due to ghosts in your browser.`
        )
      )
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
      reject(
        new Error(
          'Web Workers are not supported in this environment. Please avoid using a prehistoric browser.'
        )
      )
    }
  })
}
