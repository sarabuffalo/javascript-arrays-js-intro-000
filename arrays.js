var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, e) {
var try = ["element"] ["array,"...try]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}


function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
}

function accessElementInArray(array, index) {
return array[index]

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
}

function removeElementFromBeginningOfArray(array) {
return array.slice(array)
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return array
}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length -1)
}
