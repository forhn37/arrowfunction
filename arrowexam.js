// let ShowError = function() {
//   console.log("Error");
// }

// 1. function 을 날리고 화살표를 추가해줍니다.

// let ShowError = () =>  {console.log("Error");}
// let ShowError = () => console.log("Error");
// 2. {, } 안의 코드가 한줄이기 때문에 생략이 가능합니다.
// ShowError();

// let two_time = function(x) {
//   return x * 2;
// }

// let two_time = (x) => { x * 2};
// 1. function을 제거하고 화살표를 추가;
// let two_time = x => (x * 2);
// 2. 매개변수가 1개이면 괄호도 제거 가능 ;
let two_time = x => x * 2;
// 3.한줄이면 실행문의 괄호도 제거 가능 ;
