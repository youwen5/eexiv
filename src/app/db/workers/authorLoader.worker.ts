import { authors, Author } from '../data'

const checkIsStringArray = (data: unknown): data is string[] => {
  if (Array.isArray(data)) {
    return data.every((d) => typeof d === 'string')
  }
  return false
}

onmessage = (e) => {
  let authorIds: string[] = []
  let authors = []
  checkIsStringArray(e.data) && (authorIds = e.data as string[])

  authorIds.forEach((id) => {})
}
