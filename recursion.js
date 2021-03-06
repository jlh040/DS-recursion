/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) return nums[0];
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;

  if (words[0].length <= words[1].length) {
    words.splice(0, 1);
  }
  else {
    words.splice(1, 1);
  }

  return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 1) return str[0];
  if (str.length === 0) return '';

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length === 1 || str === '') return true;

  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function finder(inputArr, index) {
    if (inputArr[0] === val) return index;
    if (inputArr.length === 0) return -1;
    return finder(inputArr.slice(1), ++index);
  }

  return finder(arr, 0);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const stringsArr = [];

  function searchForStrings(nestedObj, arr) {
    for (let key in nestedObj) {
      if (typeof nestedObj[key] === 'object') {
        searchForStrings(nestedObj[key], arr)
      }
      else if (typeof nestedObj[key] === 'string') {
        arr.push(nestedObj[key]);
      }
    }
  };

  searchForStrings(obj, stringsArr)

  return stringsArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
