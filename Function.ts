console.log("Function in TypeScript");
/*
function (functionName)(a:typeof,b:type):returnType{
    //function body
}
*/

//No return type and no perameter

function Ram() {
  console.log("Hey ,Inside the No perameter and no return type function");
}
Ram();


// return type but no perameter

function Rahul(): number {
  console.log("Hey ,Inside the No perameter but return type function");
  return 2;
}
let a = Rahul();
console.log(a);


//No return type but with perameter

function Ritik(a: number, b: number) {
  console.log("Hey ,Inside the No return type but with perameter");
  console.log("sum of a ans b is :" + a + b);
}
Ritik(2, 4);


//With perameter and return type

function Rohon(a: number, b: number): number {
  console.log("Hey ,Inside the With perameter and return type");
  let sum: number = a + b;
  console.log("sum of a ans b is :" + sum);
  return sum * 2;
}

let multiplication = Rohon(2, 4);
console.log(multiplication);


//Types of function

// {(perameter)=>return type }If we want store function return value then we use this syntax

// let rtValue = function myFunc7(x: number, y: number): number {
//   return x + y;
// };
// or

let rtValue: (x: number, y: number) => number = function myFunc7(
  x: number,
  y: number
): number {
  return x + y;
};

let person: {
  fname: String;
  lname: String;
  GetFullName: () => String;
};
person = {
  fname: "Paragjyoti",
  lname: "Phukan",
  GetFullName: function xyz() {
    return this.fname + " " + this.lname;
  },
};

console.log(rtValue(4,8));
console.log(person.GetFullName());



//Optional perameters
/*
let resultOP = function optionalPerameter(
  a: number,
  b: number,
  c?: number
): number {
  if (c !== undefined) {
    console.log("Sum of Three number  :");
    return a + b + c;
  } else {
    console.log("Sum of two number");
    return a + b;
  }
};

console.log(resultOP(2, 4, 7));
console.log(resultOP(2, 4)); //optional print
*/

//Default perameter

let resultDP = function DefaultPerameter(
  a: number,
  b: number,
  c: number = 2 //this is default perameter
): number {
  console.log("Sum of Three number  :");
  return a + b + c;
};

console.log(resultDP(1, 2, 97));
console.log(resultDP(1, 2)); //optional perameter


//-------------------------------*****************************----------

//Rest perameter
let resultRP = function RestPerameter(
  a: number,
  b: number,
  ...Rest: number[] //rest
): number {
  let sum = a + b;
  Rest.forEach((value) => {
    sum += value;
  });
  return sum;
};

console.log(resultRP(1, 2, 97));
console.log(resultRP(1, 2, 3, 4, 5, 6, 7)); //rest perameter
