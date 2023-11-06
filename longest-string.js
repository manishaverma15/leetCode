

const FindLongestPrefix = (strs) => {
  let result = '';
  for (i = 0; i < strs[0].length; i++) {
    const toFind = strs[0][i];
    for (j = 1; j < strs.length; j++) {
      if (strs[j][i] !== toFind) {
        return result;
      }
    }
    result += strs[0][i];
  }
}
console.log(FindLongestPrefix(["flower", "flow", "flight"]))