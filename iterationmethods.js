let arr1 = [10,20,30,40,50];
for (var i = 0; i <= arr1.length-1; i++) {
    console.log(i,arr1[i]);
}

arr1.forEach(function(element,index){
    console.log(index,element);
})

let numbers = [11,22,33,44,55,66,77];
let even = [];
for (var i = 0; i <= numbers.length-1; i++) {
    if (numbers[i]%2 === 0) {
        even.push(numbers[i]);
    }
}
console.log('even',even);

let odd = numbers.filter((ele)=> ele%2 !== 0)
console.log('odd',odd);