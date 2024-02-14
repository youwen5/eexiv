import { Document, documents } from '@/app/db/data'

// Assuming the types Document, DocumentStatus, and reviewer are defined as provided in your question

// Interface for the return output
interface DocumentWithSlug {
  slug: string
  doc: Document
}

export default function findDocumentsByAuthorSorted(
  authorId: string
): DocumentWithSlug[] {
  // Filter documents by author
  const filteredDocuments = Object.entries(documents)
    .filter(([_, doc]) => doc.manifest.authors.includes(authorId))
    .map(([slug, doc]) => ({ slug, doc }))

  // Sort the filtered documents by the latest date in descending order
  const sortedDocuments = filteredDocuments.sort((a, b) => {
    const latestDateA = a.doc.manifest.dates[a.doc.manifest.dates.length - 1]
    const latestDateB = b.doc.manifest.dates[b.doc.manifest.dates.length - 1]
    return latestDateB - latestDateA // For descending order
  })

  return sortedDocuments
}
