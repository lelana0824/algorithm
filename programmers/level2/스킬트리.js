function solution(skill, skill_trees) {
  let count = 0;

  // 1. 일단 순서에 상관없이 배울 수 있는 스킬들은 제거를 한다.
  // skill_tress의 요소인 문자열 중 skill 문자열에 해당되지 않는 문자열을 삭제하는 과정이다.
  const onlySkillTreeList = skill_trees.map(char => {
    return char
      .split("")
      .filter(item => skill.split("").indexOf(item) >= 0)
      .join("");
  });

  console.log(onlySkillTreeList);

  onlySkillTreeList.forEach(char => {
    console.log(`${char} === ${skill.substring(0, char.length)}`);
    if (char === skill.substring(0, char.length)) {
      count++;
    }
  });

  return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
