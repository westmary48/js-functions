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

