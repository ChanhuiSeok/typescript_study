let a: unknown = 30; // unknown
let b = a === 123; // boolean
let c = a + 10; // TS2571 에러 - 객체의 타입이 unknown임
// 내 vscode의 경우 ts2365 에러 - +을 unknown 타입과 '10'에 적용할 수 없음
if (typeof a === 'number'){ // unknown의 타입을 검사해 정제(refine)
  let d = a + 10; // 여기서 a는 number로 평가된다
}

