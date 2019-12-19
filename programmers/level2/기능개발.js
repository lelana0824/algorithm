function solution(progresses, speeds) {
  let answer = [];
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
          break;
        }
      }

      deployList = deployList.splice(count);
      answer.push(count);
    }
  }

  return answer;
}

console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]));
