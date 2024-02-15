import { documents } from '../data'

onmessage = (e) => {
  typeof e.data === 'string' && postMessage(documents[e.data])
}
