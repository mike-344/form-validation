function formValidateHandler(){
    const email = document.querySelector("#email");
    const zip = document.querySelector("#zip");
    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#password-confirm");
    const submit = document.querySelector(".submit");

    
    submit.addEventListener("click",(e) =>{
        e.preventDefault();
    })
    
    email.addEventListener("input", (event) => {
         if (email.validity.typeMismatch) {
             email.setCustomValidity("Must be a valid email!");
         } else {
            email.setCustomValidity("");
         }
         email.reportValidity();
          });
    
    zip.addEventListener("input", (event) =>{
        if (zip.validity.tooShort || zip.validity.tooLong){
            zip.setCustomValidity("Must be 5 digits!");
            zip.reportValidity();
        } else if (zip.validity.patternMismatch) {
            zip.setCustomValidity("Cannot contain letters!");
            zip.reportValidity();
        } else{
            zip.setCustomValidity("");
        }
    })

    password.addEventListener("input", (event) =>{
        if (password.validity.patternMismatch) {
            password.setCustomValidity("Must contain at least one-uppercase and one digit!");
            password.reportValidity();
        } else{
            password.setCustomValidity("");
        }
    })
    passwordConfirm.addEventListener("input", (event) =>{
        if (passwordConfirm.value !== password.value){
            passwordConfirm.setCustomValidity("Passwords must match!");
            passwordConfirm.reportValidity();
        } else{
            passwordConfirm.setCustomValidity("");
        }
    })

}

export {formValidateHandler}