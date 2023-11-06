const isPalindrome = (x) => {
  return reverseNumber(x) === x
}

const reverseNumber = (x) => {
  let reverse = 0

  while (x !== 0) {
    const lastDigit = x % 10
    x = Math.floor(x / 10)
    reverse = reverse * 10 + lastDigit
  }
  return reverse
}

isPalindrome(342)
