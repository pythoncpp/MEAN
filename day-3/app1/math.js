function add(p1, p2) {
    const result = p1 + p2;
    console.log(`addition = ${result}`);
}

const addition = add;

// console.log(addition);

module.exports = {
    add: addition
};