let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result ="";//empty string

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

console.log(concat(str))