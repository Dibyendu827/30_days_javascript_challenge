console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(5/3);
console.log(5%3);

let a = 5;
a += 2;
console.log(a);

let b = 6;
b -= 2;
console.log(b);

if(5>4){
    console.log('5 is greater');
}

if(3<5){
    console.log('3 is lesser');
}


if(b>=4){
    console.log('b is greater or equal to 4');
}


if(b<=8){
    console.log('b is lesser or equal to 8');
}


if(2 == '2'){
    console.log('equal');
}


if(2 === '2'){
    console.log('absolutely equal');
}
else{
    console.log('not absolutely equal');
}


if('boy' === "boy" && 'girl'=== "girl"){
    console.log('boy and girl are equal');
}

let collegeTeacher = 2;
let students = 5;

if(collegeTeacher > students || collegeTeacher < students){
    console.log('Teacher is always god');
}


let studentPresent = false || null;
if(!studentPresent){
    console.log('student not present ' + studentPresent);
}

let num = 2;
console.log(`${num} is ${num>=0 ? 'positive' : 'negative'}`);


function calculator(num1, num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    console.log(`${num1} - ${num2} = ${num1-num2}`);
    console.log(`${num1} * ${num2} = ${num1*num2}`);
    console.log(`${num1} / ${num2} = ${num1/num2}`);
    console.log(`${num1} modulo ${num2} = ${num1%num2}`);
}

calculator(5,3);


function checkNum(num1, num2){
    if(num1>num2){
        console.log(num1, ' is greater');
    }
    else if(num1<num2){
        console.log(num1, ' is lesser');
    }
    else{
        console.log(num1, ' = ', num2);
    }
}

checkNum(3,3)


function checkPositive(num){
    console.log(`${num} is ${num>=0 ? 'positive' : 'negative'}`);
}

checkPositive(-2);