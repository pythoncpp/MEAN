function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let index = 0; index < numbers.length; index++) {
        const value = numbers[index];
        if (value % 2 == 0) {
            console.log(value);
        }
    }
}

// function1();

function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers.filter(n => (n % 2 == 0)));
}

// function2();

function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers.filter(n => (n % 2 != 0)));
}

// function3();

function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evens = numbers.filter(n => n % 2 == 0);
    const squares = evens.map(n => n * n);
    console.log(squares);
}

// function4();

function function5() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const cubes = 
        numbers
            .filter(n => n % 2 != 0)
            .map(n => n * n * n);
    console.log(cubes);
}

function5();