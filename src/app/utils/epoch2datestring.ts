export function epoch2datestring(epoch: number): string {
  // Create a new Date object from the epoch
  const date = new Date(epoch * 1000)

  // Format the date to the specified format
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short', // abbreviated month name
    day: '2-digit', // day as two digits
    year: 'numeric', // four digit year
  })

  return formattedDate
}
