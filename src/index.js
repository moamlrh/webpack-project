// go ahead
const x = () => console.log("x");
const c = () => console.log("c");

x();
c();

const a = {
  a: "1",
  b: "31",
  c: 12,
};

const b = {
  ...a,
  b: "2",
};

console.log(a);
console.log(b);
