function solution(a,b) {
  let answer = ``
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      answer += '*'
    }
    answer += '\n'
  }
  
  return answer;
}

console.log(solution(5,3))