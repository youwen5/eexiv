import { authors } from '../data'

onmessage = (e) => {
  if (e.data === 'LOAD') {
    self.postMessage(authors)
  }
}
