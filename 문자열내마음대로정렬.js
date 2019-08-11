function solution(strings, n) {
  
  const sorted_list = strings.sort(function compareNumbers(a, b) {
    if (a[n] === b[n]) {
      return a > b;
    } else {
      return a[n] > b[n];
    }
  });

  return sorted_list;
}
