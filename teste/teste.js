// var preco = 2
// var desconto = 0.2;
// const preco = 2;

// var total = preco - desconto;


// function soma(a, b) {
//     return a+b;
// }

// soma(5+3);

//console.log("Hello World!!");

function returnEvenValues(array){
    let evenNums = [];
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 1){
            evenNums.push(array[i]);
        }
    }
    console.log("Os números ímpares são: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);