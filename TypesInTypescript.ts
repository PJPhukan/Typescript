console.log("Types in Typescript");

//String


//Explicit type declearation
let userName: string = "xyz";

//Implicit type declearation
let password = "xyz@123";

let userDetails: string = "User is programmer";

let country = "India";
let address: string = `Singapur ${country}`; //This is like javascript

//OR(We can also use cancat function )

let state = "Assam ";
let concatValueTwoString = state.concat(country);

console.log(password);
console.log(userName);
console.log(typeof userName);
console.log(userName);
console.log(userDetails);
console.log(address);
console.log(state);
console.log(concatValueTwoString);

///---------------*****************************----------------------------------------


//Number

let num: number;
num = 15;
console.log(num);
num = 15;


///---------------*****************************----------------------------------------


//Boolean

let active: boolean = true;
console.log(active);

//Change the value of active

active = false;
console.log(active);


///---------------*****************************----------------------------------------



//null

//when we don't know the value at that time we can assign null
let empname = null;

if (empname) {
  console.log("Employee name exits");
} else {
  console.log("Employee name null"); //Print this log statement
}

console.log(empname); //It will print null
console.log(typeof empname); //It will print object


///---------------*****************************----------------------------------------



//undifind

//assign value by the compiler
let emp_pass;

if (emp_pass) {
  console.log("Employee password is 89900");
} else {
  console.log("Employee password is not set"); // Print this is log statement
}
console.log(emp_pass); //It will print undifined


///---------------*****************************----------------------------------------



//any

//When we want to skip the type checking
let networkData: any = { //it can any type of data types
    ProductNmae:"Samsung M12",
    discountPrice:23434,
    salePrice:234434
};
console.log(networkData);
console.log(networkData.discountPrice);


///---------------*****************************----------------------------------------



//Array

let arr: number[] = [12, 34, 456];
arr.push(123);

let stringArr: string[] = ["Goutom", "Rahul", "Gandhi", "Rupam"];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(stringArr);
console.log(stringArr[0]);
console.log(stringArr[1]);
console.log(stringArr[2]);
console.log(stringArr[3]);

//array operations
console.log("Length of the array is " + arr.length);
console.log(arr.join("--"));
arr.forEach((value, index) => {
  console.log(index + " index element is : " + value);
});

let newStringArr = stringArr.map((value) => {
  console.log(value.toUpperCase());
  return value.toUpperCase();
});
console.log(newStringArr);


///---------------*****************************----------------------------------------



//Union

let arr2: (string | number | boolean)[] = ["string", 123, true, false];
let userId: string | number = "12323dfdfdfdff";

arr2.forEach((element) => {
  if (typeof element === "string") {
    console.log(element.toUpperCase());
  } else {
    console.log(element);
  }
});

function UnionFunc(id: string | number): string | number {
  if (id === "string") {
    return id.toUpperCase();
  } else {
    return id;
  }
}

console.log(arr2);
console.log("User id is : ", UnionFunc(userId));


///---------------*****************************----------------------------------------




//Object

let ob: object = {
  name: "pjp",
  roll: 12,
};
//above example we can't access data by object key ,if we want key then use below method

let obj: {
  name: string;
  rollno: number;
  address: string;
  isStudent: boolean;
} = {
  name: "pjphukan",
  rollno: 12,
  address: "luchnow",
  isStudent: true,
};
console.log(ob);
console.log(obj);
// console.log(ob.name)//This is will gives error
console.log(obj.name);
console.log(obj.isStudent);
console.log(obj.address);
console.log(typeof ob)
console.log(typeof obj)


///---------------*****************************----------------------------------------




//void

let num1: number = 2;
let num2: number = 3;

//explicit 
const myFunc = (a: number, b: number): void => {
  console.log("Sum of a ans b is :", a + b);
};

//implicit void
const myFunc1 = (a: number, b: number) => {
  console.log("Sum of a ans b is :", a + b);
};

myFunc(num1, num2);


///---------------*****************************----------------------------------------



//never

// It represent value that will never occur,used when function never return value
function myFunc2(): never {
  while (true) {}
  // or
  throw new Error();
}


///---------------*****************************----------------------------------------



//unkhown

function myFunc3() {
  return "This is unkhown type example";
}

let myFuncReturn: unknown = myFunc3();
let myFuncReturn1: any = myFunc3();
console.log(myFuncReturn);
console.log(myFuncReturn1);
// console.log(myFuncReturn.toUpperCase()); //It will gives error
console.log(myFuncReturn1.toUpperCase()); //It will not gives error

//type conversion
let stringNum: string = myFuncReturn as string;
// console.log(stringNum.toUppercase()); //It will give uppercase result


///---------------*****************************----------------------------------------



//Tuple

// (number of elements are fixed and Type elementa are known and same )
let skill: [string, number] = ["java", 80]; //it should me maintain order
let color: [number, number, number, number] = [255, 255, 255, 0.4];
let color2: [number, number, number, number?] = [215, 155, 55]; //Last one value is option

console.log(skill);
console.log(skill[0]);
console.log(skill[1]);
console.log(color);
console.log(color2);
console.log("Current color is :" + color);
console.log("Current color is :" + color2);


///---------------*****************************----------------------------------------



//Enum

// (Group of named constant value)
enum days {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}
enum Months {
  Jan,
  Feb,
  Mar,
  Api,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec = "December", //we can also assign value
}

enum ORDERSTATUS {
  PENDING,
  DELEVERED,
  DISPATCH,
}

const Myfunc5 = (value: Months) => {
  switch (value) {
    case Months.Jan:
      console.log("Hey this is first month");
      break;

    default:
      console.log("Ohh no ,This is wrong");
      break;
  }
};

function myFunc6(value: ORDERSTATUS) {
  switch (value) {
    case ORDERSTATUS.DELEVERED:
      console.log("Your product successfully deleverd");
      break;

    case ORDERSTATUS.PENDING:
      console.log("Your product pending for deleverd");
      break;

    case ORDERSTATUS.DISPATCH:
      console.log("Sorry your order dispatch ,so try again");
      break;

    default:
      break;
  }
}

console.log(days);
console.log(Months);
console.log(days.SUN);
console.log(Months.Jan); //If value not assign then it return the index of the value
console.log(Months.Dec);

Myfunc5(Months.Api);
myFunc6(ORDERSTATUS.DELEVERED);
myFunc6(ORDERSTATUS.PENDING);
myFunc6(ORDERSTATUS.DISPATCH);


///---------------*****************************----------------------------------------




//Alias

// change the type of the program

type xyz = string; //xyz referce to string
let myName: xyz;
myName = "Rahdsdul";

type ps = string | number;

let USPassword: ps;
USPassword = "pipkjjfd";
USPassword = 12343434;

//type od referce to a object
type od = {
  title: string;
  price: number;
  status: boolean;
};

let orderDetails: od;
orderDetails = {
  title: "Acer ",
  price: 73990,
  status: true,
};

console.log(typeof myName);
console.log(orderDetails);


///---------------*****************************----------------------------------------


//String Literal types

//(We can store only one specific value)

let usdName: "pjphukan" | "parag" | "phukan";

// usdName = "paragjyoti phukan "; //it gives error
usdName = "pjphukan"; //It not gives any error
usdName = "parag"; //It not gives any error
usdName = "phukan"; //It not gives any error



// export {}
