import { topics } from '../data'

onmessage = (e) => {
  if (e.data === 'LOAD') {
    self.postMessage(topics)
  }
}
