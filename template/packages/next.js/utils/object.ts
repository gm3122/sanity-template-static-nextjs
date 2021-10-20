export function removeEmpty(obj: Record<string | number, any>) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null))
}

export function removeEmptyDeep(obj: Record<string | number, any>) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != null)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v]),
  )
}
