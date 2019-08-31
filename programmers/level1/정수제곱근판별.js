function solution(n) {
  const number = Math.sqrt(n);

  if (Number.isInteger(number) && number * number === n) {
    return (number + 1) * (number + 1)
  } else {
    return -1
  }
}

