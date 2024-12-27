//WAP to to find and print all even numbers from n array
let arr = [1,2,3,4,5,6,7,8,9];
let num = [];
for (var i = 0; i <= arr.length-1; i++) {
    if (arr[i]%2 === 0) {
        num.push(arr[i]);
    }
}
console.log('Even number in array',num);


//WAP to find and add all odd elements from an array into new array.
let arr1 = [1,2,3,4,5,6,7,8,9];
let num1 = [];
for (var i = 0; i <= arr1.length-1; i++) {
    if (arr1[i]%2 !== 0) {
        num1.push(arr1[i]);
    }
}
console.log('odd number in array',num1);


//WAP to find sum of all elements present in an array
let num2 = [1,2,3,4];
let sum = num2.reduce((acc,num2)=> acc + num2,0);
console.log('Sum of numbers in array',sum);


//WAP to find Product of all elements present in an array.
let num3 = [1,2,3,4];
let product = num3.reduce((acc,num3)=> acc * num3,1);
console.log('product of numbers in array',product);


//WAP to add +5 to each element of an array and print it.
let num4 = [2,4,3,5];
let add = [];
for (var i = 0; i <= num4.length - 1; i++) {
    add = num4[i]+5;
    console.log(add);
}


//WAP to find squuare of each element present in an array
let num5 = [1,2,3,4,5];
let sq = num5.map((ele)=> ele * ele);
console.log('square of each element in array',sq);


//WAP to add +5 to each element of an array and print it.
let num6 = [1,2,3,4];
let addition = num6.map((ele)=> ele + 5);
console.log('Adding 5 to each element',addition);
