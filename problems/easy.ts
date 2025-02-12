/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

const twoSum = (nums: number[], target: number) => {
  const previousNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (previousNums.has(remainder)) return [previousNums.get(remainder), i];

    previousNums.set(nums[i], i);
  }
  console.log(previousNums);
};

console.log("Running twoSums test cases\n");

// Test Case 1: Basic Example
console.log("Test Case 1:");
console.log("Result:  ", twoSum([2, 7, 11, 15], 9));
console.log("Expected: [0, 1]");
console.log();

// Test Case 2: Another simple case
console.log("Test Case 2:");
console.log("Result:  ", twoSum([3, 2, 4], 6));
console.log("Expected: [1, 2]");
console.log();

// Test Case 3: Negative numbers
console.log("Test Case 3:");
console.log("Result:  ", twoSum([-3, 4, 3, 90], 0));
console.log("Expected: [0, 2]");
console.log();

// Test Case 4: Large numbers
console.log("Test Case 4:");
console.log("Result:  ", twoSum([1000000, 500, 999500], 1000000));
console.log("Expected: [1, 2]");
console.log();

// Test Case 5: Duplicates in the array
console.log("Test Case 5:");
console.log("Result:  ", twoSum([1, 3, 3, 6], 6));
console.log("Expected: [1, 2]");
console.log();

/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */

const reverseString = (input: string) => {
  return input.split(" ").reverse().join(" ");
};

console.log("this is a test string to reverse");
console.log(reverseString("this is a test string to reverse"));
console.log();

/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

const mostCommonCharacater = (inputString: string) => {
  let map = new Map();
  let highest: { char: string; count: number } = { char: "", count: -Infinity };

  for (const char of inputString) {
    if (char !== " ") {
      map.set(char, (map.get(char) || 0) + 1);

      if (map.get(char) > highest.count)
        highest = { char: char, count: map.get(char) };
    }
  }

  return highest.char;
};

console.log("Most common character:\n");
console.log("this is a string and should return: s");
console.log(mostCommonCharacater("this is a string and should return: s"));
console.log();
/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

const findDuplicates = (inputArray: number[]) => {
  const found: number[] = [];
  const result: number[] = [];

  for (const num of inputArray) {
    if (found.includes(num) && !result.includes(num)) result.push(num);
    found.push(num);
  }
  return result;
};

const input = [4, 3, 2, 7, 8, 2, 3, 1];
console.log("Find Duplicates:\n");
console.log(`input array:${input}`);
console.log(findDuplicates(input));

/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */

const firstUniqueCharacter = (inputString: string) => {
  const freqMap = new Map<string, number>();

  for (let char of inputString) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < inputString.length; i++) {
    if (freqMap.get(inputString[i]) === 1) {
      return i;
    }
  }

  return -1;
};

const inputString = "lleetcode";

console.log("First Unique Character:\n");
console.log(`input: ${inputString} | expected to be: "l"`);
console.log(firstUniqueCharacter(inputString));
console.log();
