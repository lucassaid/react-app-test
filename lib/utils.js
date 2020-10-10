const randomLetter = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}

const randomNumber = () => {
  return Math.floor(Math.random() * 101)
}

/* returns a random string to use as id */
export const getUniqueId = () => {
  return randomLetter() + randomNumber() + Date.now();
}

/* finds index of item inside an array with a given id */
export const findIndex = (itemsArr, id) => {
  for(let i in itemsArr) {
    if(itemsArr[i].id == id) return i
  }
  return -1
}