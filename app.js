console.log(adder(1,2))

function adder(a, b) {
  return a + b;
}
// JS는 실행전 초기화 단계에서 코드의모든 함수 선언식을 찾아서 생성을 해두는 호이스팅을 일으키기 때문에 코드 위치상 adder 함수 이전에 adder을 호출해도 정상적으로 작동합니다. 

// 호이스팅 예제



