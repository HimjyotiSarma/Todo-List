function limitWords(text, limitNum) {
  const textArr = text.split(" ")
  if (textArr.length < limitNum) {
    return text
  } else {
    const slicedArr = textArr.slice(0, limitNum)
    let newTxt = slicedArr.join(" ")
    newTxt = newTxt.concat("...")
    return newTxt
  }
}
export default limitWords
