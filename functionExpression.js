// const adder = function (a, b) {
//   return a + b;
// }

// 기명함수와는 다르게 호이스팅 되지 않고 adder라는 변수만 선언 되기 때문에 중복을 방지할 수 있고, 호출 할떄는 adder(1,2) 등으로 호출하면 됨

console.log(adder(2, 3)); //Error

const adder = function(a,b) {
  return a + b;
}
// 아까전에 함수 선언식은 값이 잘 출력됐지만 함수 표현식은 오류가 납니다.