function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const index = new Date(2016, a - 1, b).getDay();
  return days[index];
};