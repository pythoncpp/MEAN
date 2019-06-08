// parameterless function
// function declaration
function myFunction() {
    console.log('inside myFunction');
}

// function invocation
// myFunction();

// parameterized function
function myFunction2(p1) {
    console.log('inside myFunction2');
    console.log('p1 = ' + p1);
    console.log('type of p1 = ' + typeof(p1));
}

// myFunction2(10);
// myFunction2('javascript');
// myFunction2(false);
// myFunction2({"name": "person1", "address": "Pune"});
// myFunction2();


// parameterized function
function myFunction3(p1, p2, p3) {
    console.log('p1 = ' + p1 + ', p2 = ' + p2 + ', p3 = ' + p3);
    console.log('typeof(p1) = ' + typeof(p1) + ', typeof(p2) = ' + typeof(p2) + ', typeof(p3) = ' + typeof(p3));
}

// myFunction3(1, 2, 3);
// myFunction3('test', 50, true);