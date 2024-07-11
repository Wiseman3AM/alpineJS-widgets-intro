let counter= 0;
const counterElement = document.querySelector('.counter')
const incrementButton =  document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const resetButton = document.querySelector('.reset')

incrementButton.addEventListener('click', function() {
   counter = Math.min(counter + 1, 10);
    counterElement.innerText = counter;
});

decrementButton.addEventListener('click', function() {
    counter = Math.max(counter - 1, 0);
    counterElement.innerText = counter;
});

resetButton.addEventListener('click', function(){
    counter = "";
    counterElement.innerText = counter;
})


      
    

