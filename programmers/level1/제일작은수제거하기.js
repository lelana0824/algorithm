function solution(arr) {
  if (arr.length === 1) {
    return [-1]
  } else {
    const minimum = Math.min(...arr)
    return arr.filter(item => item !== minimum)
  }
}