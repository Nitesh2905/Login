const name = document.getElementById('name');
const password = document.getElementById('password');
const label = document.querySelector('label');
const username = document.getElementById('username');
const passwordValidate = document.getElementById('passwordValidate');

let validName = false;
let validPassword = false;

name.addEventListener('blur', () => {
    //validate here name
    let regEx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/
    let str = name.value;
    // console.log(regEx, str)
    if (regEx.test(str)) {
        // console.log('It matched')
        validName = true;
        username.classList.remove('wrong')
        username.innerHTML= ``;
    } else {
        console.log("It didn't matched")
        username.classList.add('wrong')
        username.innerHTML= `<p>*Username must be 2-10 characters long and should not start with number.</p>`
    }
})


password.addEventListener('blur', () => {
    //validate here password
    let regEx =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/
    let str = password.value;
    // console.log(regEx, str)
    if (regEx.test(str)) {
        // console.log('It matched')
        validPassword = true;
        passwordValidate.classList.remove('wrong')
        passwordValidate.innerHTML= ``;
    } else {
        console.log("It didn't matched")
        passwordValidate.classList.add('wrong')
        passwordValidate.innerHTML= `<p>*Password must be 4 to 10 characters long, contains atleast one numeric digit and a special character.</p>`
    }
})