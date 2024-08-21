// fiter work like a filter which return new array for given input e:g below

const age=[10,14,16,18,21,35];

// write a function to evaluate age more then 18 you can do it in 2 ways below is the example

const result=age.fiter(isAdault);

console.log(result)

function isAdault(age){
  return age>=18;
}
//or

const result1=age.fiter(result=>result>=18);
console.log(result1)
