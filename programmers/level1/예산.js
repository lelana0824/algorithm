function solution(d, budget) {
  const list = d.sort((a, b) => a - b);

  let rest = budget;
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    if (rest >= list[i]) {
      rest -= list[i];
      count += 1
    }
  }

  return count;
}
