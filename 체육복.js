function solution(n, lost, reserve) {

  // 체육복이 모두 하나인 경우 (맨 처음 초기상태 설정);
  const student = Array(n).fill(1);

  // 체육복 잃어버린 애들은 -1을 해준다.
  for (let i = 0; i < lost.length; i++) {
    const index = lost[i] - 1;

    student[index] -= 1;
  }

  // 여분의 체육복이 있는 아이들은 +1을 해준다.
  for (let i = 0; i < reserve.length; i++) {
    const index = reserve[i] - 1;

    student[index] += 1;
  }
  console.log(student)

  // for문 돌면서 체육복 나눠주기.
  for (let i = 0; i < student.length; i++) {

    // 맨 첫번째 사람이 아니면서, 체육복이 없는 아이인 경우
    if (i !== 0 && student[i] === 0) {

      // 앞 친구가 여벌의 체육복이 있는지 확인한 후 체육복을 분배한다.
      if (student[i-1] === 2) {
        student[i-1]--;
        student[i]++;

         // 체육복을 얻었으면 바로 다음 학생으로 건너간다. (continue가 없으면 아래 로직을 또 타게 됨)
        continue;
      }
    }

    // 맨 뒷 사람이 아니면서, 체육복이 없는 아이인 경우

    if (i !== student.length - 1 && student[i] === 0) {

      // 뒷 친구가 여벌의 체육복이 있는지 확인한 후 체육복을 분배한다.
      if (student[i+1] === 2) {
        student[i+1]--;
        student[i]++;
      }
    }
  }

  return student.filter(item => item >= 1).length;
}

console.log(solution(5, [2, 3], [3]));
console.log(solution(5, [2, 4], [3]));
console.log(
  solution(24, [12, 13, 16, 17, 19, 20, 21, 22], [1, 22, 16, 18, 9, 10])
);
