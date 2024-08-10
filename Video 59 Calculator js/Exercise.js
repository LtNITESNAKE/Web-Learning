/*

create a faulty calculator using javascript

this  faulty calculator does following:

1. it takes two numbers as input from the user
2. if perfrom wrong  operations

+ -- > -
* -- > +
- -- > /
/ -- > **

it perfrom wrong operation 10% of the times



*/


// FAULTY CALCULATOR solution

//  const sum = (a,b) =>{
//     return a+b             good to know  new things 
//  }

function sum(a, b) {
    return a + b
}
function dif(a, b) {
    return a - b
}
function mult(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}
function expo(a, b) {
    return a ** b
}


do {

    console.log("Press 1 to sum ")
    console.log("Press 2 to sub ")
    console.log("Press 3 to div ")
    console.log("Press 4 to mul ")
    console.log("Press 5 to expo ")
    console.log("Press 6 to  exit ")

    let choice = prompt("ENter your choice")

    if (choice == 6) {
        break;
    }
    let rand = Math.random()

    a = parseFloat(prompt("Enter a Number"))
    b = parseFloat(prompt("Enter another number "))



    if (rand > 0.1) {
        switch (choice) {
            case 1: console.log(sum(a, b)); break;
            case 2: console.log(dif(a, b)); break;
            case 3: console.log(mul(a, b)); break;
            case 4: console.log(div(a, b)); break;
            case 5: console.log(expo(a, b)); break;

        }
    }
    else {

        switch (choice) {
            case 1: console.log(dif(a, b)); break;
            case 2: console.log(div(a, b)); break;
            case 3: console.log(sum(a, b)); break;
            case 4: console.log(expo(a, b)); break;
            case 5: console.log(mult(a, b)); break;

        }

    }






} while (true);


