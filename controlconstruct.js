//if else
var age = 19;
if (age > 18) {
    console.log('age is greater than 18');
}
else {
    console.log('age is not greater than 18');
}

//switch
let day = "Wednesday";

switch(day) {
    case "Monday" : console.log('Its Monday');
    break;
    case "Tuesday" : console.log('Its Tuesday');
    break;
    case "Wednesday" : console.log('Its Wednesday');
    break;
    case "Thrusday" : console.log('Its Thrusday');
    break;
    default : console.log('Its other day');
}

//for loop
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

//while loop
let count = 0;
while(count <= 5) {
    console.log("count is", count)
    count++;
}

//do while
let number = 1;
do {
    console.log("Number:", number);
    number++;
} while (number <= 3);

//for of loop
var arr = [10,20,30,40,50];
for(var i of arr) {
    console.log(i);
}

//for in loop
var arr1 = [10,20,30,40,50];
for(var i in arr) {
    console.log(i);
}

//for each
let arr2 = [10,20,30,40];
arr2.forEach((element,index,completearray) => {
    console.log(index,element,completearray);
});

//break
for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//continue
for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}