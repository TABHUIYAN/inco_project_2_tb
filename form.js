const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

  const form=document.querySelector('form');
    //thank you message
  const thankYou=document.querySelector('.thankyou');

  const nameInput=document.querySelector(
    'input[name="fname"]'
  );
  const lastnameInput=document.querySelector(
    'input[name="lname"]'
  );
  const phoneInput=document.querySelector(
    'input[name="phone"]'
  );
  const emailInput=document.querySelector(
    'input[name="email"]'
  );
  const messageInput=document.querySelector(
    'textarea[name="message"]'
  );
  
//   Adding Successe message
let shouldValidate=false;
let isFormValid=false;

const validateInputs=()=> {
      isFormValid=true;
      resetElm(nameInput)
      resetElm(lastnameInput);
      resetElm(phoneInput);
      resetElm(emailInput);
      

    if(!nameInput.value){
        isFormValid =false;
        invalidateElm(nameInput);
        nameInput.classList.add("invalid")
        nameInput.nextElementSibling.classList.remove("hidden");
       
    } 
    if(!lastnameInput.value){
        isFormValid =false;
        invalidateElm(lastnameInput);
        lastnameInput.classList.add("invalid")
        lastnameInput.nextElementSibling.classList.remove("hidden");
       
    } 
    if(!phoneInput.value){
        isFormValid =false;
        invalidateElm(lastnameInput);
        phoneInput.classList.add("invalid")
        phoneInput.nextElementSibling.classList.remove("hidden");
       
    } 
    if(!emailInput.value){
        isFormValid =false;
        invalidateElm(lastnameInput);
        emailInput.classList.add("invalid")
        emailInput.nextElementSibling.classList.remove("hidden");
       
    }

  };

  const resetElm=(elm)=>{
    elm.classList.remove("invalid")
    elm.nextElementSibling.classList.add("hidden");
}
const invalidateElm=(elm)=>{
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.add("hidden");
}
  //event listner 
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validateInputs();
    if(isFormValid){
        form.remove();
        thankYou.classList.remove("hidden")
    }
   });

nameInput.addEventListener('input',(e)=>{
    validateInputs();
})
