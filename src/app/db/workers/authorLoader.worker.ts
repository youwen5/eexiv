import { authors, Author } from '../data'

export function getAuthorsById(authorIds: string[]): { [key: string]: Author } {
  const result: { [key: string]: Author } = {}

  // Iterate through the array of author IDs
  for (const id of authorIds) {
    const author = authors[id] // Retrieve the author entry by ID
    if (author) {
      result[id] = author // If the author exists, add it to the result object
    }
  }

  return result
}

const checkIsStringArray = (data: unknown): data is string[] => {
  if (Array.isArray(data)) {
    return data.every((d) => typeof d === 'string')
  }
  return false
}

onmessage = (e) => {
  let authorIds: string[] = []
  checkIsStringArray(e.data) && (authorIds = e.data)
  let results = getAuthorsById(authorIds)

  postMessage(results)
}
