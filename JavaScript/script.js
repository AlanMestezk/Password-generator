
let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword =document.querySelector("#valor")
let passowrd = document.querySelector("#password")

let containerPassowrd = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function geradorSenha(){
    
    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){

        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }

    containerPassowrd.classList.remove("hide")
    passowrd.innerHTML = pass
    novaSenha = pass

}

function copySenha(){
   
    navigator.clipboard.writeText(novaSenha)
    
}





