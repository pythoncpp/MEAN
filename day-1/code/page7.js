// parameter with default value
// optional parameter
function myFunction(p1, p2 = 20) {
    // p1 = 10
    // p2 = 20
    const addition = p1 + p2;
    console.log(`${p1} + ${p2} = ${addition}`);
}

// p1 = 20, p2 = 40
// myFunction(20, 40);

// p1 = 10, p2 = 20
myFunction(10);