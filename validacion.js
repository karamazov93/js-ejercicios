form= document.getElementById("form")

form.addEventListener("submit", event=>{
    event.preventDefault()
})

var btn= document.getElementById("btn")

btn.addEventListener("click", e=>{
    const input= document.getElementById("input")
    console.log('btn click', input.checkValidity());


    input.setCustomValidity('')
    input.classList.remove("fail")


  if (!input.checkValidity() ) {

    input.classList.add("fail")
    input.setCustomValidity("escribi bien pelotudo")
  }

     input.reportValidity()


  
})


const palabra= "educacionIT"

