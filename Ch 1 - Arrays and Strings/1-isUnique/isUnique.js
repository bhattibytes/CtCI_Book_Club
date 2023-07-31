//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  stringArr = str.split('');
  stringSet =  new Set(str);

  if (stringArr.length !== stringSet.length) {
    return false;
  }
  return true;
}

module.exports = isUnique;
