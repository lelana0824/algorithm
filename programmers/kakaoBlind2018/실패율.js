function solution(N, stages) {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const stage = i;
    const user = stages.filter(item => item >= stage).length;
    const fault_user = stages.filter(item => item === stage).length;

    answer.push({ stage, fault_rate: user ? fault_user / user : 0});
  }

  return answer.sort((a,b) => {
    if (b.fault_rate - a.fault_rate) {
      return b.fault_rate - a.fault_rate
    } else {
      return a.stage - b.stage
    }
  }).map(item => item.stage)
}