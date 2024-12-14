var form= document.getElementById("a")


form.addEventListener("submit",e=>{
e.preventDefault

})


var btn= document.getElementById("btn")

btn.addEventListener("click", e=>{

    const b= document.getElementById("input")
    b.setCustomValidity("")
    if (!b.checkValidity()) {
        b.setCustomValidity("escribi aca gorda trola")
    } 
    reportValidity()
        
    
})