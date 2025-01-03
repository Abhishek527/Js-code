//arguments object cannot be used with arrow functions
//arguments object cannot be used with filter,map,reduce,foreach

function add() {
//const add = ()=> {
    let res = 0;
    for (var i = 0; i < arguments.length; i++) {
       res = res + arguments[i];
    }
    console.log('Result', res);
}

add(10,20);