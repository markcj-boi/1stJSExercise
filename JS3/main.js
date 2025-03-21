const elementTxt = document.getElementById("elements");
let numInpt = document.getElementById("numInpt");
const sumTxt = document.getElementById("sum");
const highNum = document.getElementById("highNum");
const lownum = document.getElementById("lowNum");
let sum = 0;
let largest = 0;

let arr =  [];
let smallest=0;
let arrLength = arr.length;


function insertEl() {
    arr.push(parseInt(numInpt.value));
    smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    elementTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = sum;
    highNum.innerHTML = largest;
    lowNum.innerHTML = smallest;
    console.log(arr);

}


function deleteAll(){

    arr = [];
    
    // while(arrLength < 0){
    //     arr.pop();
    // }
    sum = 0;
    largest = 0;
    elementTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = "";
    highNum.innerHTML = "";
    lowNum.innerHTML = "";
    console.log(arr);
}