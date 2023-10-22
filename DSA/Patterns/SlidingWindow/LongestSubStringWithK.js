//Given a string, find the length of the longest substring
// in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longestSubStringWithK = (str, k) => {
  let charFrequency = {};
  let maxLength = 0;
  let len = str.length;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < len; windowEnd++) {
    const endChar = str[windowEnd];
    if (!(endChar in charFrequency)) {
      charFrequency[endChar] = 0;
    }
    charFrequency[endChar]++;

    while (Object.keys(charFrequency).length > k) {
      const startChar = str[windowStart];
      charFrequency[startChar]--;
      if (charFrequency[startChar] === 0) {
        delete charFrequency[startChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(longestSubStringWithK("araaci", 2));
console.log(longestSubStringWithK("araaci", 1));
console.log(longestSubStringWithK("cbbebi", 3));
