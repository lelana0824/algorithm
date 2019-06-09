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
  const hash = {};

  for (let i = 0; i < completion.length; i++) {
    if (!hash[completion[i]]) {
      hash[completion[i]] = 1
    } else {
      hash[completion[i]] = hash[completion[i]] + 1
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (!hash[participant[i]]) {
      return participant[i];
    } else {
      if (hash[participant[i]] === 0) {
        return participant[i];
      } else {
        hash[participant[i]] = hash[participant[i]] - 1
      }
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
