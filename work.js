/*
1.WAP to display addition of numbers 
(numbers will be passed to a function as an argument at the time of 
calling of function.)
For e.g: add(10,20), add(50,60,70), add(), add(10)

2.WAP to find sum of array elements using reduce(): and explain it.

3.Mention Function names for below operations:
a. Add ele at the end of an array : 
b. Removes ele from  the 0th index : 
c. Creating sub array without changing original array :
d. Checking index of specific element value: indexof
e. Checking wther element is present in an array or not: 
*/
/*
1.WAP to display addition of numbers 
(numbers will be passed to a function as an argument at the time of 
calling of function.)
For e.g: add(10,20), add(50,60,70), add(), add(10)

2.WAP to find sum of array elements using reduce(): and explain it.

3.Mention Function names for below operations:
a. Add ele at the end of an array :
b. Removes ele from  the 0th index :
c. Creating sub array without changing original array :
d. Checking index of specific element value: 
e. Checking wther element is present in an array or not: 

4. Define lexical scope and explain it with the help of example.
*/

function add() {
    if(arguments.length === 1) {
        console.log(arguments[0]);
    } else if(arguments.length === 2){
        console.log(arguments[0] + arguments[1]); 
    } else if(arguments.length === 3){
        console.log(arguments[0] + arguments[1] + arguments[2]); 
    } else {
        console.log('Invalid');
    }
}
add(10,20);
add(50,60,70);
add();
add(10);


var arr = [10,20,30,40];
var sum = arr.reduce(function(acc,ele) {
    acc= acc + ele;
    return acc
},0);
console.log(sum);