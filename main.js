const bananaDiv = document.getElementById('bananas');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter += 1;
counter ++;
counter = counter + 1;

// counter = 3
console.log('counter: ', counter);


const greetingElement = document.getElementById('greeting');
const firstName = 'mary';
const lastName = 'west';
greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;