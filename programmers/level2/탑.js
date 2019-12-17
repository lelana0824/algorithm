function solution(heights) {
  let answer = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (heights[i] < heights[j]) {
        answer.unshift(j + 1);
        break;
      } else {
        if (j === 0) answer.unshift(0);
      }
    }
  }
  return answer;
}

console.log(solution([1, 5, 3, 6, 7, 6, 5]));
