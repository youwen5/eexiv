import { DocumentStatus, DocumentType } from '@/app/db/data'

export const Status = ({
  statusName,
}: Readonly<{ statusName: DocumentStatus }>) => {
  let text = ''
  let itemStyle: string = ''!
  switch (statusName) {
    case 'draft':
      text = 'Draft'
      itemStyle += 'badge-draft'
      break
    case 'published no review':
      text = 'Published'
      itemStyle += 'badge-published'
      break
    case 'reviewed':
      text = 'Peer Reviewed'
      itemStyle += 'badge-reviewed'
      break
    case 'under review':
      text = 'Pending Review'
      itemStyle = 'badge-under-review'
      break
  }
  return <span className={itemStyle}>{text}</span>
}

export const ItemBadge = ({
  itemName,
}: Readonly<{ itemName: DocumentType }>) => {
  let text = ''
  let itemStyle: string = ''!
  switch (itemName) {
    case 'report':
      itemStyle = 'badge-report'
      text = 'Report'
      break
    case 'presentation':
      text = 'Presentation'
      itemStyle = 'badge-presentation'
      break
    case 'white paper':
      text = 'White Paper'
      itemStyle = 'badge-white-paper'
      break
    case 'datasheet':
      text = 'Datasheet'
      itemStyle = 'badge-datasheet'
      break
    case 'dwm':
      text = 'DWM'
      itemStyle = 'badge-dwm'
      break
    case 'guide':
      text = 'Guide'
      itemStyle = 'badge-guide'
      break
    case 'other':
      text = 'Other'
      itemStyle = 'badge-other'
      break
  }
  return <span className={itemStyle}>{text}</span>
}
