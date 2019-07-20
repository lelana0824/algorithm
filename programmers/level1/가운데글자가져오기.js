function solution(s) {
  let answer
  if (s.length % 2 === 1) {
    // 홀수일 때
     answer = s[Math.floor(s.length / 2)]
     return answer
  } else {
    const index = s.length / 2 - 1
    answer = s.substring(index, index + 2)
    return answer
  }
}