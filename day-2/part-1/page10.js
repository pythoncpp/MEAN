function divide(p1, p2) {
    if (p2 == 0) {
        throw new 'test';
    }
    console.log(`division: ${p1 / p2}`);
}

try {
    divide(10, 0);
} catch(ex) {
    console.log(`exception: ${ex}`);
}