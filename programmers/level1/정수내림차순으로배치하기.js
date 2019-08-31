function solution(n) {
  return Number(String(n).split("").map(item => Number(item)).sort((a,b) => b - a).join(""))
}