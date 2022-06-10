const arr = ["Oleh", "Alex", "Vasya", "Petya", "Ann"];

function helloName() {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Hello ${arr[i]}`);
    }
}

export default helloName;