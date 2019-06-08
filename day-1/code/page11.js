// var is used to create a variable globally or locally
function myFunction1() {
    var num = 10;
    {
        var num = 100;
        console.log(`num = ${num}`);
    }
    console.log(`num = ${num}`);
}

// myFunction1();


function myFunction2() {
    let num = 10;
    {
        let num = 100;
        console.log(`num = ${num}`);
    }
    console.log(`num = ${num}`);
}

myFunction2();