import { hash as fnv } from 'fnv-plus'

export default function hash(key: string) {
  // fast non-cryptographic hash with error correction
  const base = fnv(key).str().substring(0, 10)
  const ending = fnv(base).str().substring(0, 2)
  return `${base}${ending}`
}
