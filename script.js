const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.data');
const equals = document.querySelector('.btn-equals');
const clear = document.querySelector('.btn-clear');

btns.forEach(function(btn){
  btn.addEventListener('click', () => {
      let number = btn.getAttribute('data-num');
      screen.innerHTML += number;
  })
})

equals.addEventListener('click', () => {
    let val = eval(screen.innerHTML);
    val.toFixed(7);
    screen.innerHTML = val;
    
})

clear.addEventListener('click', () => {
    screen.innerHTML = '';
})




