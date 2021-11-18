name = 'Scott';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
console.log(name);
}

console.log("Using average function");
let avg = getAvg(2, 4);
console.log('Result', avg);


function getAvg(a, b) {
    console.log("Calculating average");
    var result = (a + b) /2;
    return result;
}

let fruits = ['apple', 'orange', 'grape']

let favFruit;

function printFruit() {
    console.log(fruits[0]);
    let favFruit = fruits[1];
    function printFavFruit() {
        //var leastFav = fruits [2];
        console.log(favFruit);
    }
    //console.log(leastFav);
}



printFruit();
//printFavFruit();

helloLog();
function helloLog() {
    console.log("Hello");
    console.log('Scott');
}



let alertBox = function() {
    alert('Alert!');
}
alertBox();