
let fibo = (number) => {

    let firstNumber = 0;
    let secondNumber = 1;
    let next;
    for(let i=0; i<= number ; i++) {



        console.log(firstNumber)
        next= firstNumber+secondNumber;
        firstNumber = secondNumber;
        secondNumber = next;

    }

}
fibo(10)
