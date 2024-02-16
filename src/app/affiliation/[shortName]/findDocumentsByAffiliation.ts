import { Document, documents, authors } from '@/app/db/data'

// Assuming the types Document, DocumentStatus, and reviewer are defined as provided in your question

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

export default function findDocumentsByAffiliationSorted(
  affiliationShort: string
): DocumentWithSlug[] {
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

  // Sort the filtered documents by the latest date in descending order
  const sortedDocuments = results.toSorted((a, b) => {
    const latestDateA = a.doc.manifest.dates[a.doc.manifest.dates.length - 1]
    const latestDateB = b.doc.manifest.dates[b.doc.manifest.dates.length - 1]
    return latestDateB - latestDateA // For descending order
  })

  return sortedDocuments
}
