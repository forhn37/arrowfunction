// const adder = function (a, b) {
//   return a + b;
// }

// const adder = (a, b) => {
//     return a + b;
// }
// 1. 1. function 키워드를 제거하고 중괄호 이전에 화살표(=>) 를 추가합니다.

const adder = (a, b) => ( a + b );

// 2. 본 예제는 코드 구문이 한줄이고 return 문이 있기 때문에 위 처럼 바꿀 수 있습니다. return문은 중괄호( { , } )가 아닌 일반 괄호( (, ) )로 바꿀 수 있습니다.