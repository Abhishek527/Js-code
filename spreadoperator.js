const mul = (...args) => {
    let res = args.reduce((acc,ele) => acc * ele , 1);
    console.log('Result', res);
}

mul();
mul(2,4);
mul(2,4,2);