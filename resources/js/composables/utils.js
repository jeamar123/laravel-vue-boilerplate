export const objToURLParams = (obj) => {
  return Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join('&')
}
