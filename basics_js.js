// 1 tast alert("I am JS");

/* 2 task let admin;
let name = "John";

admin = name;

alert(admin); */


/* 3 task let earth;
let currentUser;
 */

/* 4 task let nameUser = prompt("Input your name");
alert(nameUser); */

/* let answer = prompt("off name Js");

let result = answer == "EcmaScript" ? "True" : "False";

alert(result); */

/* 
let inputNumber = +prompt("input number")
let result;

if(inputNumber > 0 ) {
    result = 1;
}
    else if(inputNumber < 0){
        result = -1;
    }
    else if(inputNumber === 0){
        result = 0;
    }
alert(result);     */
/* 
let a = +prompt("first number");
let b = +prompt("second number");

let result = a + b < 4 ? "Мало" : "Много";

alert(result); */


/* let login = prompt("input login");
let message;


message = login == "Сотрудник" ? "Привет" : login == "Директор" ? "Здравствуйте" : login == "" ? "Нет логина" : " ";

alert(message); */

/* let age = prompt("input age");

if(age >= 14 && age <= 90) {
    alert("success");
}

else {
    alert("error");
} */

/* 
let age = prompt("input age"); 

if(age <= 14 || age >= 90 ) alert("success");
if(!(age >= 14 && age <= 90)) alert("success"); */



/* for(let i = 2; i <= 10; i++) {
    if(i % 2 === 0) alert(i);
} */

/*   let i = 0;

  while(i < 3) {
      alert(`number ${i}`);
      i++;
  } */



/* let condition = true;
let number;

while(condition) {
    number = prompt("input age");
    if(number > 100 || number === null) {
        condition = false;
    }
}
 */


/* let browser;

if(browser === "Edge") {
    alert("You've got the Edge!");
}
else if(browser === 'Chrome' || browser === "Firefox" || browser === "Safari"|| browser === "Opera") {
    alert("Okay");
}
else {
    alert("We hope");
}
 */


/* let number = +prompt("input number 0 - 3");

switch(number) {
    case 0: 
        alert("0");
        break;
    case 1:
        alert("1");
        break;
    case 2:
    case 3:
        alert("2 or 3")
        break;
}
 */




/* 
let age = +prompt("input age");

function checkAge(age) {
    return age > 18 ? true : confirm("Родители разрешили");
}

checkAge(age); */

/* let firstNumbert = +prompt("input first number");
let secondNumber = +prompt("input second number")


function min(a,b) {
 if(a < b) return a;
 if(b < a) return b;
 
 return "="
}

alert(min(firstNumbert, secondNumber)); */


/* let condition = true;
let number;
let degree;


function pow(number, degree) {
    let returnNumber = 1;
    for(let i = 1; i <= degree; i++) {
        returnNumber *= number;
    }

    return returnNumber
}

while(condition) {
    number = +prompt("input number");
    degree = +prompt("input degree");
    if(number > 0 && degree > 0) {
        condition = false;
    }
}

alert(pow(number, degree));
 */

