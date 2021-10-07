export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) ?? []
}

export function setLocalStrage(key, data) {
  const oldData = getLocalStorage(key)
  oldData.length
    ? localStorage.setItem(key, JSON.stringify([...oldData, data]))
    : localStorage.setItem(key, JSON.stringify(data))
}
