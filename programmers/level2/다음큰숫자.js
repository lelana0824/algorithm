function solution(n) {
  const originBinNumberOneLength = n
    .toString(2)
    .split("")
    .filter(item => item === "1").length;

  let nextBigNumberOneLength;
  let answer = n;
  while (originBinNumberOneLength !== nextBigNumberOneLength) {
    answer++;
    nextBigNumberOneLength = answer
      .toString(2)
      .split("")
      .filter(item => item === "1").length;
  }

  return answer;
}

console.log(solution(78));
