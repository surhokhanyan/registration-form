let singIn = document.querySelector("#singIn");
let btnIn = document.querySelector("#btnIn");
let btnUp = document.querySelector("#btnUp");
let btnLogin = document.querySelector("#btnLogin");
let formBottomSpan = document.querySelector("#formBottom span");
let login = document.querySelector("#login");
let loginPassword = document.querySelector("#loginPassword");
let passwordRegEx = document.querySelector("#passwordRegEx");
let signUp = document.querySelector("#signUp");
let regBtnIn = document.querySelector("#regBtnIn");
let regBtnRegister = document.querySelector("#regBtnRegister");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let emailMobile = document.querySelector("#emailMobile");
let password = document.querySelector("#password");
let firstP = document.querySelector("#firstP");
let lastP = document.querySelector("#lastP");
let emailP = document.querySelector("#emailP");
let passwordP = document.querySelector("#passwordP");
let firstNameRegEx = /^[A-Z]+\S+$/;
let lastNameRegEx = /^[A-Z]/;
let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegEx = /^(?=.*\w)(?=.*[!@#$%^&*\)\(+=._-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let regValue = [];
btnLogin.addEventListener("click", ()=>{
    passwordRegEx.style.display = "flex";
})
btnUp.addEventListener("click", ()=>{
    passwordRegEx.style.display = "none";
    signUp.style.display = "flex";
    singIn.style.display = "none";
    regBtnRegister.addEventListener("click", ()=>{
        regValue.push({
            firstName:firstName.value,
            lastName:lastName.value,
            email:emailMobile.value,
            password:password.value,
        })
        if (firstNameRegEx.test(firstName.value) === false){
            firstP.style.display = "flex";
            firstName.style.border = "2px solid red";
        }else{
            firstP.style.display = "none";
            firstName.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (lastNameRegEx.test(lastName.value) === false){
            lastP.style.display = "flex";
            lastName.style.border = "2px solid red";
        }else{
            lastP.style.display = "none";
            lastName.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (emailRegEx.test(emailMobile.value) === false){
            emailP.style.display = "flex";
            emailMobile.style.border = "2px solid red";
        }else{
            emailP.style.display = "none";
            emailMobile.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (passRegEx.test(password.value) === false){
            passwordP.style.display = "flex";
            password.style.border = "2px solid red";
        }else{
            passwordP.style.display = "none";
            password.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (firstNameRegEx.test(firstName.value) === true &&
            lastNameRegEx.test(lastName.value) === true &&
            emailRegEx.test(emailMobile.value) === true &&
            passRegEx.test(password.value) === true){
            signUp.style.display = "none";
            singIn.style.display = "flex";
            btnLogin.addEventListener("click", ()=>{
                if (login.value === regValue[0].email && loginPassword.value === regValue[0].password){
                    location.href = "https://www.youtube.com/";
                    passwordRegEx.style.display = "none";
                }else{
                    passwordRegEx.style.display = "flex";
                }
            })
        }
    })
})
regBtnIn.addEventListener("click", ()=>{
    signUp.style.display = "none";
    singIn.style.display = "flex";
})
formBottomSpan.addEventListener("click", ()=>{
    signUp.style.display = "flex";
    singIn.style.display = "none";
    regBtnRegister.addEventListener("click", ()=>{
        regValue.push({
            firstName:firstName.value,
            lastName:lastName.value,
            email:emailMobile.value,
            password:password.value,
        })
        if (firstNameRegEx.test(firstName.value) === false){
            firstP.style.display = "flex";
            firstName.style.border = "2px solid red";
        }else{
            firstP.style.display = "none";
            firstName.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (lastNameRegEx.test(lastName.value) === false){
            lastP.style.display = "flex";
            lastName.style.border = "2px solid red";
        }else{
            lastP.style.display = "none";
            lastName.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (emailRegEx.test(emailMobile.value) === false){
            emailP.style.display = "flex";
            emailMobile.style.border = "2px solid red";
        }else{
            emailP.style.display = "none";
            emailMobile.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (passRegEx.test(password.value) === false){
            passwordP.style.display = "flex";
            password.style.border = "2px solid red";
        }else{
            passwordP.style.display = "none";
            password.style.border = "1px solid rgb(190, 190, 190)";
        }
        if (firstNameRegEx.test(firstName.value) === true &&
            lastNameRegEx.test(lastName.value) === true &&
            emailRegEx.test(emailMobile.value) === true &&
            passRegEx.test(password.value) === true) {
            signUp.style.display = "none";
            singIn.style.display = "flex";
            btnLogin.addEventListener("click", ()=>{
                if (login.value === regValue[0].email && loginPassword.value === regValue[0].password){
                    location.href = "https://www.youtube.com/";
                    passwordRegEx.style.display = "none";
                }else{
                    passwordRegEx.style.display = "flex";
                }
            })
        }
    })
})


console.log(regValue);