function solution(s) {
  if (s.length === 4 || s.length === 6) {
    const list = s.split("").map(item => Number(item));

    const numberList = list.filter(item => item >= 0);

    return numberList.length >= 4
  } else {
    return false;
  }
}