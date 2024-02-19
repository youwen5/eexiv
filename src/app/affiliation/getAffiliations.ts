import { Document, authors, documents } from '@/app/db/data'

// Interface for the return output
interface DocumentWithSlug {
  slug: string
  doc: Document
}

const findDocumentsByAuthor = (authorId: string): DocumentWithSlug[] => {
  // Filter documents by author
  return Object.entries(documents)
    .filter(([_, doc]) => doc.manifest.authors.includes(authorId))
    .map(([slug, doc]) => ({ slug, doc }))
}

const checkAffiliation = (
  affiliationStr: string[],
  affiliationShort: string
) => {
  for (const affiliation of affiliationStr) {
    if (affiliation.split('@')[1] === affiliationShort) {
      return true
    }
  }
  return false
}

const getNumberOfDocumentsByAffiliation = (
  affiliationShort: string
) => {
  // Find authors with the given affiliation
  const results: DocumentWithSlug[] = []
  for (const [key, value] of Object.entries(authors)) {
    if (
      checkAffiliation(value.affiliation, affiliationShort) ||
      (value.formerAffiliations &&
        checkAffiliation(value.formerAffiliations, affiliationShort))
    ) {
      // Check if document is already in results
      const additions = findDocumentsByAuthor(key)
      for (const addition of additions) {
        const existing = results.find((doc) => doc.slug === addition.slug)
        if (!existing) {
          results.push(addition)
        }
      }
    }
  }

  return results.length
}

export default function getAffiliations(): string[] {
  // Get affiliations
  const affiliations: string[] = []
  for (const [_key, value] of Object.entries(authors)) {
    for (const affiliation of value.affiliation) {
      const id = affiliation.split('@')[1]
      if (!affiliations.includes(id)) {
        affiliations.push(id)
      }
    }
  }

  // Sort affiliations by research output
  const affiliationDocs: { [key: string]: number } = {}
  for (let i = 0; i < affiliations.length; i++) {
    affiliationDocs[affiliations[i]] = getNumberOfDocumentsByAffiliation(
      affiliations[i]
    )
  }
  affiliations.sort(
    (a, b) => affiliationDocs[b] - affiliationDocs[a]
  )

  return affiliations
}
