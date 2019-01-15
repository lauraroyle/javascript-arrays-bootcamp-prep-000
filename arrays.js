var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  [element, ...array]
  return array = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
    array.unshift(element)
    return array;
}

function addElementToEndOfArray (array, element) {
  [...array, element]
  return array = [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(array.length - 1)
}
