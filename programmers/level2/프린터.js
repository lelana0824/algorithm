function solution(priorities, location) {
  let answer = 0;
  const list = priorities.map((value, index) => ({
    value,
    index
  }));

  while (true) {
    // 배열의 맨 처음 요소를 잘라서 가져옴
    const current = list.splice(0, 1)[0];
    if (list.some(item => item.value > current.value)) {
      // 맨 처음 요소보다 중요도가 큰 아이템이 있다면 자른 요소를 배열 맨 뒤에 넣음 (push 메서드)
      list.push(current);
    } else {
      // 중요도가 큰 아이템이 없다면 answer의 값을 증가시키고
      // 현재 아이템의 초기 index 값 (while문이 돌기 전 초창기 배열의 index 값)과
      // 함수 인자로 받아온 location 값이 일치하는지 확인을 하고, 일치한다면 answer를 반환한다.
      answer++;
      if (current.index === location) {
        return answer;
      }
    }
  }
}

const list = [1, 1, 9, 1, 1, 1];
const current = { value: 1, index: 0 };
const list2 = [{ value: 1, index: 1 }];

answer = 5;

// console.log(solution(list, 0));
