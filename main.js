const myForm = document.querySelector('#my-form')
const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');
const errorMsg = document.querySelector('.msg');
const spchar = /[!\@\#\$\%\^\&\*\(\)\-\_\=\+\-\*\/]/;
const num = /[0-9]/
const uppercase = /[A-Z]/


setTimeout(() => errorMsg.remove(), 5000);
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
};

function check(){
    if(pass.value === '' && cpass.value === '') {
        errorMsg.classList.add('error');
        errorMsg.innerHTML = 'Please fill all fields'

    } else{
        errorMsg.classList.add('filled');
        errorMsg.innerHTML = 'Fields have been filled'
    }

    let popup = document.querySelector('.popup');
    let validatingMsg = document.querySelector('.checking-msg')
    if(cpass.value === pass.value){
        popup.style.display = 'flex';
        validatingMsg.innerHTML = 'VALIDATED';
        validatingMsg.style.color = 'green';
    } else{
        popup.style.display = 'flex';
        validatingMsg.innerHTML = 'Password does not match.';
        validatingMsg.style.color = 'red';
    }
};


function passCheck(){
    if(pass.value.match(spchar) && pass.value.match(num) && pass.value.match(/[A-Z]/) && pass.value.length >= 8) {
        pass.style.borderColor = 'green';
    } else{
        pass.style.borderColor = 'red';
        
        errorMsg.innerHTML = 'Password must contain atleast 8 characters with uppercase, lowecase, number and special character.';
        errorMsg.classList.add('error');
    }
};

function pass2(){
    if(cpass.value === pass.value) {
        cpass.style.borderColor = 'green';
    } else {
        cpass.style.borderColor = 'red';
        errorMsg.innerHTML = 'Password does not match';
        errorMsg.classList.add('error');
    }
};

function exit(){
    window.location.reload();
};
