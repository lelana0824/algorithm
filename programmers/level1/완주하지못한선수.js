function solution(participant, completion) {
  const p = participant.sort();
  const c = completion.sort();

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) return p[i];
  }
}

// 받은 배열
// 전체 참가 - ['mislav', 'stanko', 'mislav', 'ana']
// 완주자 - ['stanko', 'ana', 'mislav']

// 정렬 후 배열
// 전체 참가 - [ 'ana', 'mislav', 'mislav', 'stanko' ]
// 완주자 - [ 'ana', 'mislav', 'stanko' ]














function solution(participant, completion) {
  const solutionMap = {};

  for (let i = 0; i < completion.length; i++) {
    if (!solutionMap[completion[i]]) {
      solutionMap[completion[i]] = 1
    } else {
      solutionMap[completion[i]] = solutionMap[completion[i]] + 1
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (!solutionMap[participant[i]]) {
      return participant[i];
    } else {
      if (solutionMap[participant[i]] === 0) {
        return participant[i];
      } else {
        solutionMap[participant[i]] = solutionMap[participant[i]] - 1
      }
    }
  }
}

// 전체 참가 - ['mislav', 'stanko', 'mislav', 'ana']
// 완주자 - ['stanko', 'ana', 'mislav']