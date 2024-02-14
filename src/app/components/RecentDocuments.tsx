import { epoch2datestring } from '@/app/utils/epoch2datestring'
import { documents, topics as topicsList, Document } from '@/app/db/data'
import Link from 'next/link'

function getThreeMostRecentDocuments(
  docs: Readonly<{ [key: string]: Document }>
): { [key: string]: Document } {
  return Object.entries(docs)
    .filter(([_, document]) => document.manifest.status !== 'draft') // Exclude documents with status 'draft'
    .map(([slug, document]) => ({
      slug,
      document,
      latestDate: document.manifest.dates[document.manifest.dates.length - 1], // Get the last (latest) date
    }))
    .sort((a, b) => b.latestDate - a.latestDate) // Sort by the latest date, descending
    .slice(0, 3) // Take the top 3
    .reduce(
      (acc, { slug, document }) => {
        acc[slug] = document // Reconstruct the object with the top 3 documents
        return acc
      },
      {} as { [key: string]: Document }
    )
}

const RecentDocuments = (): React.ReactNode[] => {
  // Convert the object keys into an array
  const keys = Object.keys(getThreeMostRecentDocuments(documents))

  // Iterate over each of the selected keys
  return keys.map((key) => {
    const { title, dates, type, topics } = documents[key].manifest
    let dateString = epoch2datestring(dates[dates.length - 1])
    let typeString = ''
    switch (type) {
      case 'report':
        typeString = 'report'
        break
      case 'presentation':
        typeString = 'presentation'
        break
      case 'white paper':
        typeString = 'white paper'
        break
      case 'datasheet':
        typeString = 'datasheet'
        break
      case 'dwm':
        typeString = 'DWM'
        break
      case 'guide':
        typeString = 'guide'
        break
      case 'other':
        typeString = 'document'
        break
    }

    return (
      <div key={key}>
        <Link href={`/document/view/${key}`}>{title}</Link>, a {typeString}{' '}
        about {topicsList[topics[0]]['name']} published on {dateString}
        .
        <br />
      </div>
    )
  })
}

export default RecentDocuments