export default function hasUnfilledField(body: { [x: string]: any }) {
  for (const field in body) {
    if (!body[field]) {
      return true
    }
  }
  return false
}
