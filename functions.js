// input = animal ex. fish
// output = animal product ex. fish stix

function nuggetizer(animal){
return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`

};

console.log('deer:', nuggetizer2('jerky'));

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));
nuggetizer('fish');

const nomnom =(mary, food) => {
    return `${mary} devoured ${food}`;
  }

const bearSticks = nuggetizer('bear');
console.log(nomnom('mary', bearSticks)); // mary devoured bear stix

//function numberAdder that takes in a number and returns
//the number plus 3. so input=22, output =25

const numberAdder = (x) => {
   const finalNumber = x + 3; 
   printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22); //25
numberAdder(2); //5
numberAdder(4);
numberAdder(5);

printToDom('I am ready for lunch', 'feelings');