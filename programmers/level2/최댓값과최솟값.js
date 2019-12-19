function solution(s) {
  const answer = s.split(" ").map(item => parseInt(item));
  const maxNumber = Math.max(...answer);
  const minNumber = Math.min(...answer);

  return `${minNumber} ${maxNumber}`;
}
