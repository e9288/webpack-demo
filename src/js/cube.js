// 전체 모듈화 => es6에서 default export : json 객체만 가능하다, 한 파일에서 한번만 사용 가능하다.
const cube = x => x * x * x;
const a = x => x;

//export default { cube: cube, a: a };
// key-value가 같은 경우 key를 생략 가능.
 export default { cube, a };