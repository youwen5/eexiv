import { Document, documents } from '@/app/db/data'

// Assuming the types Document, DocumentStatus, and reviewer are defined as provided in your question

// Interface for the return output
interface DocumentWithSlug {
  slug: string
  doc: Document
}

export default function findDocumentsByAuthor(
  authorId: string
): DocumentWithSlug[] {
  // Initialize an empty array to store the results
  const result: DocumentWithSlug[] = []

  // Iterate over the documents object entries
  for (const [slug, doc] of Object.entries(documents)) {
    // Check if the authorId is present in the document's authors array
    if (doc.manifest.authors.includes(authorId)) {
      // If present, push the document along with its slug to the results array
      result.push({ slug, doc })
    }
  }

  // Return the results array
  return result
}
