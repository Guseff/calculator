export const saveItem = () => {}

export const loadInteger = (key, defaultValue = 0) =>
  Number.parseInt(localStorage.getItem(key) || defaultValue, 10)

export const loadFloat = (key, defaultValue) =>
  Number.parseFloat(localStorage.getItem(key) || defaultValue)

export const loadString = (key, defaultValue) =>
  localStorage.getItem(key) || defaultValue

export const saveSessionItem = (key, item) => localStorage.setItem(key, item)

export const showPrice = number => `$${number}-`
