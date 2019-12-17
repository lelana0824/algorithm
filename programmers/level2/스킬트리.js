function solution(skill, skill_trees) {
  let count = 0;

  const onlySkillTreeList = skill_trees.map(char => {
    return char
      .split("")
      .filter(item => skill.split("").indexOf(item) >= 0)
      .join("");
  });

  onlySkillTreeList.forEach(char => {
    if (char === skill.substring(0, char.length)) {
      count++;
    }
  });

  return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
