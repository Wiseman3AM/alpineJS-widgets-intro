let counter= 0;
const counterElement = document.querySelector('.counter')
const incrementButton =  document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

incrementButton.addEventListener('click', function() {
    counter++;
    counterElement.innerText = counter;
});

decrementButton.addEventListener('click', function() {
    counter--;
    counterElement.innerText = counter;
});


