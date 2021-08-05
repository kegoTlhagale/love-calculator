import Logger from '../utilities/logger'
import { HTTP_CODES } from '../globals'

exports.calculate = (req, res) => {
  const loop = (array) => {
    const length = array.length - 1
    const newArray = []

    for (let step = 0; step <= array.length; step += 1) {
      const index =  length - step
      const sum = parseInt(array[step], 10) + parseInt(array[index], 10)

      if ((index - step) === 1) {
        newArray.push(sum)
        break
      } if ((index - step) === 2) {
        newArray.push(sum)
        newArray.push(parseInt(array[step + 1], 10))
        break
       } else {
        newArray.push(sum)
      }
    }

    return newArray
  }

  const { name, otherName } = req.body


  if (!name || name.trim() === '') {
    res.status(HTTP_CODES.OK).json({
      success: false,
      error: { message: 'Please enter a valid name' }
    })
  }

  if (!otherName || otherName.trim() === '') {
    res.status(HTTP_CODES.OK).json({
      success: false,
      error: { message: 'Please enter a valid name' }
    })
  }

  let track = 1
  let completeString = `${name} loves ${otherName}`
  Logger.log(completeString)

  // convert all characters to lower case and remove white spaces
  completeString = completeString.toLowerCase().replace(/\s/g, '')

  // each letter that is found in the string and the number of occurences
  // e.g { k: 1, g: 3 }
  const foundLetters = {}

  // determine the letters in the string and the number of occurences of each existing letter
  // start from the left to the right
  while (completeString.length > 0) {
    const currentLetter = completeString[0]
    const count = `[^${currentLetter}]`
    const remove = `${currentLetter}`

    const searchExp = new RegExp(count, 'g')
    const removeExp = new RegExp(remove, 'g')

    const occurences = completeString.replace(searchExp, '').length // number of times the letter appears
    completeString = completeString.replace(removeExp, '')

    Object.assign(foundLetters, { [currentLetter]: occurences })
  }

  Logger.log(foundLetters)

  // extract only the numbers
  // cater for numbers with 2 digits
  const initialSet = Object.values(foundLetters).toString().replace(/,/g, '').split('')
  let newSet = initialSet

  // sum the letters two at a time starting with the ends and work your way to the center
  // repeat until there is only 2 digits left
  Logger.log('initial set:', initialSet)

  while (newSet.length > 2) {
    newSet = loop(newSet.toString().replace(/,/g, '').split(''))
    Logger.log(`Resulting set ${track}`, newSet)

    track += 1
  }

  let percentage = `${newSet[0]}${newSet[1]}`
  if (parseInt(percentage, 10) > 100) {
    newSet = loop(newSet.toString().replace(/,/g, '').split(''))
    percentage = `${newSet[0]}${newSet[1]}`
  }

  const response = {
    success: true,
    percentage,
  }

  Logger.log(`calculated love is: ${response.percentage}`)
  res.status(HTTP_CODES.OK).json(response)
}
