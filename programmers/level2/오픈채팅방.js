function solution(record) {
  // 닉네임을 객체로 저장해 놓는것이 좋다.
  const nick = {};
  let altered_list = record.map(item => item.split(" "));
  console.log(altered_list);
  altered_list
    .slice()
    .reverse()
    .forEach(item => {
      if (item[2] && !nick[item[1]]) {
        nick[item[1]] = item[2];
      }
    });

  return altered_list
    .filter(item => {
      return item[0] !== "Change";
    })
    .map(item => {
      return item[0] === "Enter"
        ? nick[item[1]] + "님이 들어왔습니다."
        : nick[item[1]] + "님이 나갔습니다.";
    });
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
  ])
);
