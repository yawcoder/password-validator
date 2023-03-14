const input = document.getElementById('input');
const eye = document.querySelector('.fa-eye')
const countEl = document.getElementById('count');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
const check4 = document.getElementById('check4');


eye.addEventListener('click', () => {
    if(input.type == 'password'){
        input.type = 'text';
        eye.style.color = 'black';
    }else{
        input.type = 'password';
        eye.style.color = 'gray';
    }
})

input.addEventListener('input', () => {
    countEl.innerText = input.value.trim().length;

    if(countEl.innerText > 5){
        checkTrue(check1);
    }else{
        checkFalse(check1);
    }
    
    if(input.value.match(/[0-9]/i)){
        checkTrue(check2);
    }else{
        checkFalse(check2);
    }

    if(input.value.match(/[^A-Za-z0-9-' ']/i)){
        checkTrue(check3);
    }else{
        checkFalse(check3);
    }

    if(!input.value.match(" ") && input.value !== ""){
        checkTrue(check4);
    }else{
        checkFalse(check4);
    }
})

function checkTrue(check){
    check.style.color = 'purple';
    check.firstElementChild.classList.remove('fa-times-circle');
    check.firstElementChild.classList.add('fa-check-circle');
}

function checkFalse(check){
    check.style.color = 'red';
    check.firstElementChild.classList.remove('fa-check-circle');
    check.firstElementChild.classList.add('fa-times-circle');
}