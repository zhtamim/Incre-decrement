

let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');
let input = document.querySelector('input');

incrementBtn.addEventListener('click', function(){
    input.value++;
});
decrementBtn.addEventListener('click', function(){
   
    if( input.value>0){
        input.value--
    }
});