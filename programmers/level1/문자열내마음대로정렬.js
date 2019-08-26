function solution(strings, n) {
  
  const sorted_list = strings.sort((a, b) => {
    return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  });

  return sorted_list;
}
