function function1() {
    const numbers = [1, 2, 3, 4, 5];
    for (let index = 0; index < numbers.length; index++) {
        const value = numbers[index];
        console.log(`square : ${value * value}`);
    }
}

// function1();

function function2() {
    const numbers = [1, 2, 3, 4, 5];
    const squares = [];
    for (let index = 0; index < numbers.length; index++) {
        const value = numbers[index];
        squares.push(value * value);
    }
    console.log(numbers);
    console.log(squares);
}

// function2();

function square(num) {
    return num * num;
}

function function3() {
    const numbers = [1, 2, 3, 4, 5];
    const squares = [];
    for (let index = 0; index < numbers.length; index++) {
        const value = numbers[index];
        squares.push(square(value));
    }
    console.log(numbers);
    console.log(squares);
}

// function3();

function function4() {
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(square);

    console.log(numbers);
    console.log(squares);
}

// function4();

function function5() {
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(function(n) {
        return n * n;
    });

    console.log(numbers);
    console.log(squares);
}

// function5();

function function6() {
    const numbers = [1, 2, 3, 4, 5];
    // const squares = numbers.map((n) => {
    //     return n * n;
    // });

    const squares = numbers.map(n => n * n);
    console.log(numbers);
    console.log(squares);
}

// function6();

function function7() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers);
    console.log(numbers.map(n => n * n * n));
}

// function7();

function function8() {
    const products = [
        { id: 1, title: 'product 1', price: 100, category: 'cat 1', description: 'description 1' },
        { id: 2, title: 'product 2', price: 200, category: 'cat 2', description: 'description 2' },
        { id: 3, title: 'product 3', price: 300, category: 'cat 3', description: 'description 3' },
        { id: 4, title: 'product 4', price: 400, category: 'cat 4', description: 'description 4' }
    ];

    // console.log(products);
    console.log(products.map(product => { 
        return {title: product.title, price: product.price, discount: product.price * 0.10 }
    }));
}

function8();