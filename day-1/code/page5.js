// array
// - collection of values

function myFunction1() {
    const numbers = [1, 2, 3, 4, 5];
    // console.log(numbers);
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        console.log(number);
    }
}

// myFunction1();

function myFunction2() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers);

    // add an element at the end (append)
    numbers.push(6);
    console.log(numbers);

    // remove the last element
    const value = numbers.pop();
    console.log(`popped value = ${value}`);
    console.log(numbers);

    // removing an element from any position
    numbers.splice(3, 1);
    console.log(numbers);
}

// myFunction2();

function myFunction3() {
    const countries = ["India", "China", "USA", "UK", "Japan"];
    console.log(countries);

    countries.push('France');
    console.log(countries);

    const country = countries.pop();
    console.log(`country = ${country}`);
    console.log(countries);

    countries.splice(1, 2);
    console.log(countries);

}

// myFunction3();

function myFunction4() {
    const mixed = [10, true, 'India', {"name": "person1"}, 40, false, "Japan"];
    // console.log(mixed);
    for (let index = 0; index < mixed.length; index++) {
        const value = mixed[index];
        console.log(`value = ${value}, type = ${typeof(value)}`);
    }
}

myFunction4();


