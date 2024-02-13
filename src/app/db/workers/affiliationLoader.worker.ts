import { affiliations } from '../data'

onmessage = (e) => {
  if (e.data === 'LOAD') {
    self.postMessage(affiliations)
  }
}
