/*
 * Problem: Merge Intervals
 *
 * Given an array of intervals, merge overlapping intervals.
 *
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 */

const mergeIntervals = (inputArray: number[][]) => {
  if (inputArray.length <= 1) return inputArray;

  let index = 0;
  const result: number[][] = [];
  //first number
  let currentStart = inputArray[0][0];
  while (index < inputArray.length - 1) {
    //current end number is higher then next start number
    const currentEnd = inputArray[index][1];
    const nextStart = inputArray[index + 1][0];
    if (currentEnd < nextStart) {
      //set start to next index first element
      result.push([currentStart, inputArray[index][1]]);
      currentStart = inputArray[index + 1][0];
    }
    index++;
  }
  result.push([currentStart, inputArray[index][1]]);
  return result;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]) + `\nShould be:[[1,6],[8,10],[15,18]]\n\n`
);

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ]) + `\nShould be:[[1,5]]\n\n`
);

//constraints of the algo???
// console.log(
//   mergeIntervals([
//     [1, 5],
//     [2, 3],
//     [4, 6],
//   ]) + `\nShould be:[[1,6]]\n\n`
// );
// console.log(
//   mergeIntervals([
//     [1, 10],
//     [2, 6],
//     [8, 9],
//     [11, 15],
//   ]) + `\nShould be:[[1,10],[11,15]]\n\n`
// );
// console.log(
//   mergeIntervals([
//     [1, 5],
//     [2, 7],
//     [8, 12],
//     [10, 15],
//   ]) + `\nShould be:[[1,7],[8,15]]\n\n`
// );
// console.log(
//   mergeIntervals([
//     [1, 4],
//     [0, 2],
//     [3, 5],
//   ]) + `\nShould be:[[0,5]]\n\n`
// );

console.log(
  mergeIntervals([
    [1, 2],
    [3, 4],
    [5, 6],
  ]) + `\nShould be:[[1,2],[3,4],[5,6]]\n\n`
);

console.log(mergeIntervals([[1, 3]]) + `\nShould be:[[1,3]]\n\n`);

console.log(mergeIntervals([]) + `\nShould be:[]\n\n`);

console.log(
  mergeIntervals([
    [1, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]) + `\nShould be:[[1,4],[5,6],[7,8],[9,10]]\n\n`
);

/*
 * Problem: Group Anagrams
 *
 * Given an array of words, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 */
const groupAnagrams = (inputArray: string[]) => {};

/*
 * Problem: Longest Palindromic Substring
 *
 * Find the longest palindromic substring in a given string.
 *
 * Example:
 * Input: "babad"
 * Output: "bab" (or "aba")
 *
 */

const longestPalindrome = (inputString: string) => {};

/*
 * Problem: Flatten Nested Object
 *
 * Convert a deeply nested object into a flat key-value map.
 *
 * Example:
 * Input: { a: { b: { c: 1 } }, d: 2 }
 * Output: { "a.b.c": 1, d: 2 }
 *
 * Hint: Use recursion + a helper function.
 */

const flattenObject = (
  object1: Record<string, any>,
  object2: Record<string, any>
) => {};

/*
 * Problem: Deep Object Comparison
 *
 * Write a function to deeply compare two objects.
 *
 * Example:
 * Input: obj1 = { a: { b: 1 } }, obj2 = { a: { b: 1 } }
 * Output: true
 *
 * Hint: Use recursion and check nested properties.
 */

const compareObjects = (
  object1: Record<string, any>,
  object2: Record<string, any>
) => {
  if (
    typeof object1 !== "object" ||
    object1 === null ||
    typeof object2 !== "object" ||
    object2 === null
  )
    return false;

  if (Object.entries(object1).length != Object.entries(object2).length)
    return false;

  for (const [key, value] of Object.entries(object1)) {
    //check if object2 has same key
    if (!object2[key]) return false;

    //if another object re call compare on the objects
    if (typeof value === "object") {
      if (compareObjects(value, object2[key]) === false) return false;
    }
    //check if key values match and if type of values are same
    else if (object2[key] != value || typeof object2[key] !== typeof value)
      return false;
  }
  return true;
};

// console.log(
//   compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }) + "\nShould be True\n"
// ); // ✅ true
// console.log(
//   compareObjects({ a: { b: 1 } }, { a: { b: 1 } }) + "\nShould be True\n"
// ); // ✅ true
// console.log(
//   compareObjects({ a: 1, b: 2 }, { a: 2, b: 1 }) + "\nShould be False\n"
// ); // ❌ false

// console.log(
//   compareObjects({ a: { b: 2, c: 3 } }, { a: { b: 2, c: 3 } }) +
//     "\nShould be True\n"
// ); // ✅ true
// console.log(
//   compareObjects({ a: { b: 2, c: 4 } }, { a: { b: 2, c: 3 } }) +
//     "\nShould be False\n"
// ); // ❌ false

// console.log(
//   compareObjects({ a: 1, b: "hello" }, { a: 1, b: "hello" }) +
//     "\nShould be True\n"
// ); // ✅ true
// console.log(
//   compareObjects({ a: 1, b: 2 }, { a: 1, b: "2" }) + "\nShould be False\n"
// ); // ❌ false

// console.log(compareObjects([1, 2, 3], [1, 2, 3]) + "\nShould be True\n"); // ✅ true
// console.log(compareObjects([1, 2, 3], [1, 3, 2]) + "\nShould be False\n"); // ❌ false
// console.log(
//   compareObjects({ a: [1, 2, 3] }, { a: [1, 2, 3] }) + "\nShould be True\n"
// ); // ✅ true
// console.log(
//   compareObjects({ a: [1, 2, 3] }, { a: [1, 3, 2] }) + "\nShould be False\n"
// ); // ❌ false

/*
 * Problem: Maximum Subarray Sum
 *
 * Find the contiguous subarray with the largest sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6  // Subarray: [4,-1,2,1]
 *
 */

const maximumSubarraySum = (inputArray: number[]) => {
  let result = inputArray[0];
  let maxEnding = inputArray[0];
  let resultStartIndex = 0,
    resultEndIndex = 0;
  let maxStartIndex = 0,
    maxEndIndex = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const newEnding = maxEnding + inputArray[i];
    maxEndIndex = i;
    if (newEnding > inputArray[i]) maxEnding = newEnding;
    else {
      maxEnding = inputArray[i];
      maxStartIndex = i;
    }

    if (maxEnding > result) {
      resultStartIndex = maxStartIndex;
      resultEndIndex = maxEndIndex;
      result = maxEnding;
    }
  }
  return inputArray.slice(resultStartIndex, resultEndIndex + 1);
};

// const maxSubArrayInput = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log("\n\nmaximum sub array:\n");
// console.log(`input: ${maxSubArrayInput}`);
// console.log(`result: ${maximumSubarraySum(maxSubArrayInput)}`);
// console.log("expected: [4,-1,2,1]");
