export const getUniqueId = () => {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
}

export const findIndex = (itemsArr, id) => {
  for(let i in itemsArr) {
    if(itemsArr[i].id == id) return i
  }
  return -1
}