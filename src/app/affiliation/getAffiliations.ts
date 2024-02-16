import { authors } from '@/app/db/data'

export default function getAffiliations(): string[] {
  const affiliations: string[] = []
  for (const [_key, value] of Object.entries(authors)) {
    for (const affiliation of value.affiliation) {
      const id = affiliation.split('@')[1]
      if (!affiliations.includes(id)) {
        affiliations.push(id)
      }
    }
  }
  return affiliations
}
