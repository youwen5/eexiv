import { documents } from '../data'

onmessage = (e) => {
  if (e.data === 'LOAD') {
    self.postMessage({ documents })
  }
}
