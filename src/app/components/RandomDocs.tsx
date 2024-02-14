import { epoch2datestring } from '@/app/utils/epoch2datestring'
import { documents, topics as topicsList } from '@/app/db/data'
import Link from 'next/link'

const RandomDocs = (): React.ReactNode[] => {
  // Convert the object keys into an array
  const keys = Object.keys(documents)

  // Determine the number of keys to process (all if fewer than 10)
  const numKeysToProcess = keys.length < 10 ? keys.length : 10

  // Shuffle the keys array if there are more than 10 keys
  if (keys.length > 10) {
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[keys[i], keys[j]] = [keys[j], keys[i]]
    }
  }

  // Select keys based on numKeysToProcess
  const selectedKeys = keys.slice(0, numKeysToProcess)

  // Iterate over each of the selected keys
  return selectedKeys.map((key, index) => {
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
      case 'whitepaper':
        typeString = 'whitepaper'
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
        about{' '}
        <Link href={`/topic/${topics[0]}`}>
          {topicsList[topics[0]]['name']}
        </Link>{' '}
        published on {dateString}
        .
        <br />
      </div>
    )
  })
}

export default RandomDocs
