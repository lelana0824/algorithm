function solution(s, n) {
  const big_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  const small_alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += s[i]
      continue
    } else if (small_alphabet.includes(s[i])) {
      const before_index = small_alphabet.findIndex(item => item === s[i]);
      const now_index = (before_index + n) % small_alphabet.length;

      answer += small_alphabet[now_index]
    } else if (big_alphabet.includes(s[i])) {
      const before_index = big_alphabet.findIndex(item => item === s[i]);
      const now_index = (before_index + n) % small_alphabet.length;

      answer += big_alphabet[now_index]
    }
  }

  return answer;
}