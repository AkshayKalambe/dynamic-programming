

// this is easy a easy approach where n is number of place of which
// we want to find fibonacci

// eg : n=5 we know  as we know addition of previous and number before previous is owr output

// make function

function fibonaccis(n) {
// Define three variable for number 1 , number 2 and for next number
    let numberFirst = 0;
    let numberSecond = 1;
    let next;


    for (let i = 0; i <= n; i++) {


        console.log(numberFirst)
        next= numberFirst+ numberSecond;
        numberFirst = numberSecond;
        numberSecond = next;

}

}

fibonaccis(20)
