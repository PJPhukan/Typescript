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
function Rahul() {
    console.log("Hey ,Inside the No perameter but return type function");
    return 2;
}
var a = Rahul();
console.log(a);
//No return type but with perameter
function Ritik(a, b) {
    console.log("Hey ,Inside the No return type but with perameter");
    console.log("sum of a ans b is :" + a + b);
}
Ritik(2, 4);
//With perameter and return type
function Rohon(a, b) {
    console.log("Hey ,Inside the With perameter and return type");
    var sum = a + b;
    console.log("sum of a ans b is :" + sum);
    return sum * 2;
}
var multiplication = Rohon(2, 4);
console.log(multiplication);
//Types of function
// {(perameter)=>return type }If we want store function return value then we use this syntax
// let rtValue = function myFunc7(x: number, y: number): number {
//   return x + y;
// };
// or
var rtValue = function myFunc7(x, y) {
    return x + y;
};
var person;
person = {
    fname: "Paragjyoti",
    lname: "Phukan",
    GetFullName: function xyz() {
        return this.fname + " " + this.lname;
    },
};
console.log(rtValue(4, 8));
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
var resultDP = function DefaultPerameter(a, b, c //this is default perameter
) {
    if (c === void 0) { c = 2; }
    console.log("Sum of Three number  :");
    return a + b + c;
};
console.log(resultDP(1, 2, 97));
console.log(resultDP(1, 2)); //optional perameter
//-------------------------------*****************************----------
//Rest perameter
var resultRP = function RestPerameter(a, b) {
    var Rest = []; //rest
    for (var _i = 2 //rest
    ; _i < arguments.length //rest
    ; _i++ //rest
    ) {
        Rest[_i - 2] = arguments[_i]; //rest
    }
    var sum = a + b;
    Rest.forEach(function (value) {
        sum += value;
    });
    return sum;
};
console.log(resultRP(1, 2, 97));
console.log(resultRP(1, 2, 3, 4, 5, 6, 7)); //rest perameter
