import { nationalities } from '../data'

onmessage = (e) => {
  if (e.data === 'LOAD') {
    self.postMessage(nationalities)
  }
}
