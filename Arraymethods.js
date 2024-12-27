var arr1 = [10,11,22,33,44]

// for (var i = 0; i <= arr1.length-1;i++){
//     if(arr1[i] % 2 === 0 ){
//         console.log(arr1[i]);
//     }
// }

var arr2 = [10, 20, 30, 40]

arr2.push(50); //Append element at the end of an array
console.log('After push:',arr2); //[ 10, 20, 30, 40, 50 ]

arr2.unshift(5); // Append Element at the 0th Index 
console.log('After unshift',arr2); //[ 5, 10, 20, 30, 40, 50 ]

console.log('Element removed ',arr2.pop());
console.log('After ',arr2);

console.log('Element removed ',arr2.shift());
console.log('After ',arr2);

arr3 = [10,20,30,40,50,60,70];
arr3.splice(1,2,100,200);
console.log('After ',arr3);

let arr4 = [10,20,30,40,50,60,70];
let part = arr4.slice(1,4);
console.log('After ',part);

console.log(arr4.indexOf(30));

console.log(arr4.includes(10));

arr5 = [10,20,30,1,4,50,5];
arr5.sort()
console.log('after',arr5);

arr4.reverse();
console.log(arr4);

let arr6 = [1,2,3];
let arr7 = [4,5,6];
let comboined = arr6.concat(arr7);
console.log(comboined);

var names = ['a','p','p','l','e'];
var fruit = names.join("");
console.log(fruit);

let users = ['Abhi','Pavan','Manu','yashu'];
let [user1,user2] = users;
console.log(user1);
console.log(user2);