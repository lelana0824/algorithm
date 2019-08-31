function solution(n) {
  const result = String(n)
    .split("")
    .map(item => Number(item))
    .reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  return result
}
