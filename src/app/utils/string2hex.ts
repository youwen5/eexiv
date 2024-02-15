export default function string2hex(str: string): string {
  // Hash function to convert string to a number
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }

  // Convert the hash to a hex color code
  let color = '#'
  for (let i = 0; i < 3; i++) {
    // Ensuring minimum brightness for each component to make text stand out
    // Adjust the minimum brightness as needed (e.g., 0x80 for brighter colors)
    const minBrightness = 0x80
    const value =
      (((hash >> (i * 8)) & 0xff) % (0xff - minBrightness)) + minBrightness
    color += ('00' + value.toString(16)).substr(-2)
  }

  return color
}
