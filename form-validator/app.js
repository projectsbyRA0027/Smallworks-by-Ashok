const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control.error';
    const small = formControl.querySelecter('small');
    small.innerText = message;
}

//show sucess outline
function showsucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}


// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

  //check required fields
  function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)}is required`);
            isRequired = true;
        }else{
          showsucess(input);  
        }
    });

    return isRequired;
  }

  //check input length
  function checkLength(input,min,max){
    if(input.value.length < min){
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} charcters`
        );
    }else if(input.value.length > max){
        showError(
            input,
            `${getFieldName(input)} must be less then ${max} characters`
        );
    }else{
        showsucess(input);
    }
  }

  //check passwords match
  function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Passwors do not match')
    }
  }

  //get fieldname
  function getFieldName(input){
    return input.id.charAt(0).toUppercase()+input.id.slice(1);
  }

  //event listners
  form.addEventListener('submit',function(e){
    e.preventDefault();

    if(checkRequired([username,email,password,password2])){
        checkLength(username,3,15);
        checkLength(password,6,25);
        checkEmail(email)
        checkPasswordMatch(password,password2);
    }
  });