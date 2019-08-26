function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(arr[i])
    } else {
      if (arr[i - 1] !== arr[i]) {
        answer.push(arr[i])
      }
    }
  }
  return answer
}

console.log(solution([1,1,3,3,0,1,1]))
console.log(solution([4,4,4,3,3]))

