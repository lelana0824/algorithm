function solution(progresses, speeds) {
  let answer = [];

  // speed와 더해서 객체를 만들어 줌
  let deployList = progresses.map((v, i) => {
    return {
      progress: v,
      speed: speeds[i]
    };
  });

  while (deployList.length > 0) {
    deployList = deployList.map(item => {
      return {
        ...item,
        progress: item.progress + item.speed
      };
    });

    if (deployList[0].progress >= 100) {
      let count = 0;
      for (let i = 0; i < deployList.length; i++) {
        if (deployList[i].progress >= 100) {
          count++;
        } else {
          // 이때 주의해야 할 점은 모든 요소를 돌면 안됨. 왜냐면 배열의 순서대로 배포를 하는게 원칙이기 때문에
          // 만약에 진행율이 100, 130, 56, 100, 40 이라면 모두 for문을 돌아서 count가 3이 되는게 아니라
          // 100, 130 까지만 돌아서 count가 2가 되어야 함. 왜냐면 4번째에 있는 기능은 3번째에 있는 기능 개발이 56까지 밖에 안됐으므로 배포를 못함
          break;
        }
      }

      // 배포가 완료된 요소는 제거
      deployList = deployList.splice(count);

      // 배포가 된 기능의 갯수를 더해줌.
      answer.push(count);
    }
  }

  return answer;
}

console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]));
