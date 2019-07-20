function solution(answers) {
  const student1Pattern = [1, 2, 3, 4, 5];
  const student2Pattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3Pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 학생 점수
  let student = [0, 0, 0];

  // 채점하기
  // 맞추면 1점씩 올라감
  for (let i = 0; i < answers.length; i++) {
    if (student1Pattern[i % student1Pattern.length] === answers[i]) student[0] += 1;
    if (student2Pattern[i % student2Pattern.length] === answers[i]) student[1] += 1;
    if (student3Pattern[i % student3Pattern.length] === answers[i]) student[2] += 1;
  }

  // 채점 다 하고 가장 많이 맞춘 학생의 점수 구하기
  const max = Math.max(student[0], student[1], student[2]);

  // 1번 학생부터 가장 많이 맞춘 학생의 점수와 비교하며
  // 최고득점인 학생들만 answer 배열에 추가 (배열 index가 0부터 시작하므로 문제가 원하는 리턴값을 맞추기 위해 index에 1을 더해야 함)
  const answer = [];
  student.forEach((item, index) => {
    if (item === max) {
      answer.push(index + 1);
    }
  });

  // 오름차순으로 정렬하여 리턴함.
  return answer.sort((a, b) => a - b);
}
