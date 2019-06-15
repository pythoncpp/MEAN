const str = '/?value1=100&value2=300';
const parts = str.split('?');
console.log(parts);

const queryString = parts[1];
const pairs = queryString.split('&');
console.log(pairs);

const keyValuePairs = pairs.map(pair => {
    const keyValues = pair.split('=');
    return  {key: keyValues[0], value: keyValues[1]};
});
console.log(keyValuePairs);

function parsePair(key) {
    const array = keyValuePairs.filter(pair => {
        return pair.key == key;
    })
    
    return array.length > 0 ? parseInt(array[0].value) : 0;     
}

let value1 = parsePair('value1'), value2 = parsePair('value2');
console.log(value1, value2);

const addition = value1 + value2;
console.log(`addition =  ${addition}`);


// const keyValuePairs = [];
// for(let index = 0; index < pairs.length; index++) {
//     const pair = pairs[index];
//     console.log(pair);
//     const keyValues = pair.split('=');
//     // const keyValuePair = {key: keyValues[0], value: keyValues[1]};
//     const keyValuePair = {};
//     keyValuePair[keyValues[0]] = keyValues[1];
//     keyValuePairs.push(keyValuePair);
// }
// console.log(keyValuePairs);