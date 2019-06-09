function solution(participant, completion) {
  const p = participant.sort();
  const c = completion.sort();

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) {
      continue
    } else {
      
    }
  }
}

// 받은 배열 
// 전체 참가 - ['mislav', 'stanko', 'mislav', 'ana']
// 완주자 - ['stanko', 'ana', 'mislav']

// 정렬 후 배열
// 전체 참가 - [ 'ana', 'mislav', 'mislav', 'stanko' ]
// 완주자 - [ 'ana', 'mislav', 'stanko' ]