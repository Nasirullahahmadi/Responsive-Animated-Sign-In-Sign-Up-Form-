/* ~~~~~~~~~~~~~~~~~~~~ LOGIN SHOW AND HIDDEN ~~~~~~~~~~~~~~~~~~~~ */
const signUp = document.getElementById("signUp"),
        signIn = document.getElementById("signIn"),
        loginIn = document.getElementById("loginIn"),
        loginUp = document.getElementById("loginUp");

signUp.addEventListener("click", ()=> {
    loginIn.classList.remove("block");
    loginUp.classList.remove("none");

    //Add classes
    loginIn.classList.add("none");
    loginUp.classList.add("block");
});

signIn.addEventListener("click", ()=> {
    //REMOVE THE CLASSES FIRST IF THEY EXIST
    loginIn.classList.remove("none");
    loginUp.classList.remove("block");

    //Add classes
    loginIn.classList.add("block");
    loginUp.classList.add("none");
});