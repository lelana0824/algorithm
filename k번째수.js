function solution(array, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    let start, end, numberIndex;
    for (let j = 0; j < commands[i].length; j++) {
      if (!start) {
        start = commands[i][j];
        continue;
      }
      if (!end) {
        end = commands[i][j];
        continue;
      }
      if (!numberIndex) {
        numberIndex = commands[i][j];
        continue;
      }
    }
    let res = array.slice(start-1, end).sort((a,b) => (a-b))
    answer.push(res[numberIndex-1])
  }
  return answer
}