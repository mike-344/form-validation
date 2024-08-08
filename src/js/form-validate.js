function formValidateHandler(){
    const email = document.querySelector("#email");
    const country = document.querySelector("#country");
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


}

export {formValidateHandler}