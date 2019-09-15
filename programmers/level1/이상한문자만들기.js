function solution(s) {
  // 띄어쓰기 기준으로 나눠서 배열로 만듦.
  const list = s.split(" ");

  const result = [];

  for (let i = 0; i < list.length; i++) {
    // 단어를 각각 하나의 알파벳이 요소가 되는 배열로 만듦
    let text_list = list[i].split("");

    // 그 배열을 map 함수를 이용해서 짝수인덱스면 대문자, 홀수인덱스면 소문자로 만듦.
    text_list = text_list.map((value, index) => {
      if (index % 2 === 0) {
        return value.toUpperCase();
      } else {
        return value.toLowerCase();
      }
    });

    //for문이 끝나기 전에 알파벳 요소로 되어있는 배열을 다시 하나의 단어로 합치고 result 배열에 넣어줌
    result.push(text_list.join(""));
  }

  // for문이 다 돌았으면 띄어쓰기 기준으로 나눠진 배열을 다시 문자열로 합쳐준다.
  return result.join(" ");
}
