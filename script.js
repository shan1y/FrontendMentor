let btn = document.querySelector('button')
let error_text = document.querySelectorAll('.error_text')
let error_icon = document.querySelectorAll('.icon')
var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const inputs = document.getElementsByTagName('input');

function validateInputs() {
    btn.addEventListener('click', function () {
            console.log('hi')
            
       for (let i=0; i< inputs.length; i++) {     
           
        if(i===2) {
            if(inputs[2].value.match(mailformat)) {
                error_text[i].classList.add('hidden');
                error_icon[i].classList.add('hidden');
                } else {
                error_text[i].classList.remove('hidden');
                error_icon[i].classList.remove('hidden');
                }
            }

            else {
                if (!inputs[i].value) {
                error_text[i].classList.remove('hidden');
                error_icon[i].classList.remove('hidden');
            } else {
                error_text[i].classList.add('hidden');
                error_icon[i].classList.add('hidden');
                
            }
        }
    }
    })
}

validateInputs()