/*
parameter: integer
return: the integer in lazy roman numerals and modern roman numerals
pseudocode:
- initialize object with roman numerals as keys and real numbers as values
from greatest to smallest values. Add more key/value pairs representing special characters for toRoman Function
- initialize result as empty string
- run outer for loop iterating through keys in obj
  - run inner while loop for when num is greater then obj[key]
    - add key to result
    - subtract key-value from num
- return result
*/

function toRomanLazy(num){
  const obj = {
    'M': 1000, 
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  let result = "";

  for (key in obj){
    while (num >= obj[key]){
      result += key
      num -= obj[key]
    }
  }
  return result
}
  

function toRoman(num) {
  const obj = {
    'M': 1000, 
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let result = "";

  for (key in obj){
    while (num >= obj[key]){
      result += key
      num -= obj[key]
    }
  }
  return result
}

module.exports = { toRoman, toRomanLazy };
