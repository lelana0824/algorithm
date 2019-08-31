function solution(s, n) {
  const small_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const big_alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += s[i]
      continue
    } else if (small_alphabet.split("").includes(s[i])) {
      const before_index = small_alphabet.split("").findIndex(item => item === s[i]);
      const now_index = (before_index + n) % small_alphabet.length;

      answer += small_alphabet[now_index]
    } else if (big_alphabet.split("").includes(s[i])) {
      const before_index = big_alphabet.split("").findIndex(item => item === s[i]);
      const now_index = (before_index + n) % small_alphabet.length;

      answer += big_alphabet[now_index]
    }
  }

  return answer;
}