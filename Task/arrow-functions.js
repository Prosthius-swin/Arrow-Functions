//Q1
//let printWelcome = (n) => console.log(`Welcome ${n}`);
//printWelcome("John");

//Q2
//let addTwoNums = (n1, n2) => console.log(n1 + n2);
//addTwoNums(5, 10);

//Q3
//Create a function to calculate the sum of elements in an array.
/*let sumArray = () => {
    let nums = [];
    alert("Input 5 numbers");

    for(let i = 0; i < 5; i++)
    {
    nums[i] = parseInt(prompt(`element - ${i} : `));
    }

    let arrSum = nums.reduce((a, b) => a + b);
    console.log(arrSum);
}
sumArray();*/

//Q4
//Create a function to calculate the result 
//of raising an integer number to another. 
/*let raised = (n1, n2) => {
n1 = prompt("Input base number:");
n2 = prompt("Input the exponent:")
console.log(Math.pow(n1, n2));
}
raised();*/

// Q5
//Create a function to calculate the 
//Fibonacci number of a specific term
let fib = () => {
    let first = 0;
    let second = 1;

    let sequence = [];

    let counter = parseInt(prompt("Enter a number:"));

    if(counter >= 1)
    {
        sequence.push(0);
    } else if (counter >= 2)
    {
        sequence.push(1);
    }

    for(let i = 2; i <= counter; i++)
    {
        let oneTwo = first + second;
        first = second;
        second = oneTwo;
        sequence.push(oneTwo);
    }
    console.log(sequence[counter - 1]);
}
fib();