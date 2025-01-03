// function add() {
//     console.log('Inside the function');
// }

//console.log(add);

// add();
// add('Hello');
// add(10,20,30);

// function add() {
//     console.log(arguments[0], arguments[1], arguments[2]);
// }

// add();
// add(10);
// add(10,20);
// add(10,20,30);


function mul() {
    if(arguments.length === 2) {
        console.log(arguments[0]*arguments[1]);
    }
    else if(arguments.length === 3) {
        console.log(arguments[0]*arguments[1]*arguments[2]);
    }
    else if(arguments.length === 4) {
        console.log(arguments[0]*arguments[1]*arguments[2]*arguments[3]);
    }
    else {
        console.log('Invalid');
    }
}
mul();
mul(2,4)
mul(1,2,3);
mul(1,2,3,4);
mul(3,4,6,3,2);


function mul(){
    if(arguments.length === 2){
        console.log(`Multiplication of ${arguments[0]} 
        and ${arguments[1]} is:`,arguments[0]*arguments[1]);
    }
    else if(arguments.length === 3){
        console.log(`Multiplication of ${arguments[0]}, ${arguments[1]} and 
        ${arguments[2]} is:`,arguments[0]*arguments[1]*arguments[2]);
    }
    else if (arguments.length === 4){
        console.log(
        `Multiplication of ${arguments[0]}, ${arguments[1]}, ${arguments[2]} and 
        ${arguments[3]} is:`,arguments[0]*arguments[1]*arguments[2]*arguments[3]);
    }
    else {
        console.log('Invalid number of Arguments...!!')
    }
}

mul();            //---> arguments= []
mul(10,20);       //---> arguments= [10,20]
mul(10,20,30);    //--->arguments= [10,20,30]
mul(10,20,30,40); //--->arguments= [10,20,30,40]

