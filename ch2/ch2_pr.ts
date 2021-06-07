let a = 1 + 2;
let b = a = 3;

type fruit = {
  [name: string]: number;
}

let c: fruit  = {
  'apple': a,
  'banana': b
}
let d = c.apple * 4;
