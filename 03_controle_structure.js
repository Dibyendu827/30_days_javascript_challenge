//Task-1
let num1 = 2;
if (num1 > 0) {
    console.log(num1, ' is positive');
}
else if (num1 < 0) {
    console.log(num1, ' is negative');
}
else {
    console.log(num1, ' is zero');
}

// Task-2
let age = 15;
if (age >= 18) {
    console.log('You are aligible for vote');
}
else {
    console.log('You are not eligible for vote');
}

// Task-3
let n1 = 2, n2 = 5, n3 = 4;
if (n1 > n2 && n1 > n3) {
    console.log(n1, ' is greatest');
}
else if (n2 > n1 && n2 > n3) {
    console.log(n2, ' is greatest');
}
else {
    console.log(n3, ' is greatest');
}

// Task-4
let day = 3;
switch (day) {
    case 1: console.log('Monday');
        break;
    case 2: console.log('Tuesday');
        break;
    case 3: console.log('Wednesday');
        break;
    case 4: console.log('Thursday');
        break;
    case 5: console.log('Friday');
        break;
    case 6: console.log('Saturday');
        break;
    case 7: console.log('Sunday');
        break;
}

// Task-5
let marks = 80;
switch(true){
    case (marks>90): console.log('A');
    break;
    case (marks>70): console.log('B');
    break;
    case (marks>50): console.log('C');
    break;
    case (marks>40): console.log('D');
    break;
}


// Task-6
let divNum = 10;
console.log(`${divNum} is ${divNum % 2 === 0 ? 'even' : 'odd'}`);

// Task-7
let year = 2024;
if (year % 4 === 0 && year % 100 !== 0) {
    console.log(year, ' is leap year');
}
else if (year % 400 === 0) {
    console.log(year, ' is leap year');
}
else {
    console.log(year, ' is not leap year');
}

// Shorter version
if((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
    console.log(year, ' is leap year');
}

