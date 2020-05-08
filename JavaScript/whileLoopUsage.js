var listGuys = ["Jaiju", "Divya", "Shabana", "Arun", "Vishnu", "Sreelekshmi", "Vamsi", "Arjun", "Dains", "Anusri", "Roshi", "Jidin"];

function findPayer(listGuys) {
    var numberOfGuys = listGuys.length;
    randomPosition = Math.floor(Math.random() * numberOfGuys);
    console.log(randomPosition);
    console.log(listGuys[randomPosition]);


}
// findPayer(listGuys);


function countFizbuZ() {
    i = 0;
    while (i < 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");

        } else if (i % 3 === 0) {
            console.log('fiz');

        }
        else if (i % 5 === 0) {
            console.log('buz');

        }
        else {
            console.log(i);
        }
        i++;
    }
}
countFizbuZ();

function fibonacci(number){
    if(number == 0){
        return 0;
    }
    initialArray = [0,1];
    if(number === 1)
    {
        return [0];
    }
    else if(number === 2){
        return [0,1];
    }
    while(number === initialArray.length){
        initialArray = initialArray.push( initialArray[initialArray.length] + initialArray[initialArray.length - 1]);
    }
    return initialArray;

}