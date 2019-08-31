function solution(s) {
  const list = s.split(" ");

  const result = [];

  for (let i = 0; i < list.length; i++) {
    let text_list = list[i].split("");

    text_list = text_list.map((value, index) => {
      if (index % 2 === 0) {
        return value.toUpperCase();
      } else {
        return value.toLowerCase();
      }
    });

    result.push(text_list.join(""));
  }

  return result.join(" ");
}
