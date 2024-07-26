// Task-1
for(let i=1; i<=10; i++){
    // console.log(i);
}

// Task-2
for(let i=1; i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);
}


// Task-3
let num = 1, sum = 0;
while(num<=10){
    sum += num;
    num++;
}
console.log('Sum of 1 to 10 is ',sum);

// Task-4
num = 10;
while(num>0){
    // console.log(num);
    num--;
}

// Task-5
num = 1;
do{
    console.log(num);
    num++;
}while(num<6);


//Task-6
let fact = 1;
num = 5;
let i = num;
do{
    fact *= i;
    i--;
}while(i>0)
console.log('Fact of ', num, ' is ',fact);

// Task-7
let n =5;
for(let i=0; i<n; i++){
    let str = '';
    for(let j=0; j<=i; j++){
        str += '* '
    }
    console.log(str);
}

// Task-8
for(let i=1; i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// Task-9
for(let i=1;i<=10;i++){
    if(i===7){
        break;
    }
    console.log(i);
}