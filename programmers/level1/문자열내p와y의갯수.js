function solution(s) {
  const lowerString = s.toLowerCase();

  const pLength = lowerString.split("").filter(item => item === "p").length;
  const yLength = lowerString.split("").filter(item => item === "y").length;
  
  if (pLength === 0 && yLength === 0) {
    return true
  } else {
    return pLength === yLength
  }
}

