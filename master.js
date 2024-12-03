/*const btn= document.getElementById("btn")
btn.addEventListener("click",(e)=>{
  e.preventDefault()
  verdad= input.checkValidity()
  if (verdad) {
      console.log("submit", "[" +input.value +"]",verdad);
  }
  else{
    console.error("campo obligatorio")
  }

  console.log("click");
  
  
})
  


const input= document.querySelector("input")
const formulario= document.getElementById("form")

/*formulario.addEventListener("submit",(e)=>{
  e.preventDefault()
  verdad= input.checkValidity()
  if (verdad) {
      console.log("submit", "[" +input.value +"]",verdad);
  }
  else{
    console.error("campo obligatorio")
  }

  console.log("click");
  
  
})*/



const form= document.querySelector("form")
const input= document.querySelector("input")


function setCustomValidity(mensaje) {
  const div= document.querySelector("div")
  div.innerText= mensaje
  div.style.display= mensaje? "block": "none"
}


function validarInput(valor) {
  valor= valor.trim()
  let mensaje=""
 const lg= valor.length
 if (lg==0) {
  mensaje= "este campo es obligatorio"
  console.error(mensaje);
  setCustomValidity(mensaje)

  return null //si el valor NO cumplió con las validaciones
 }
 else if(lg< 3){
  mensaje= "este campo debe poseer minimo tres caracteres"
  console.error(mensaje);
  setCustomValidity(mensaje)
return null
 }
 else if(lg> 10){
  mensaje= "este campo debe poseer máximo diez caracteres"
  console.error(mensaje);
  setCustomValidity(mensaje)
return null
 }
 else if(valor.includes(" ")){
  mensaje= "error de validación, no permite espacios intermedios"
  console.error(mensaje);
  setCustomValidity(mensaje)
return null
 }
setCustomValidity(mensaje)

valor= valor.encodeURIcomponent(valor)
  return valor
}

addEventListener("input",()=>{
  validarInput(input.value)
  
})

form.addEventListener("submit",(e)=>{

  e.preventDefault()
let valor= validarInput(input.value)

if (valor) {
  console.log("valor ingresado", "["+valor +"]");
}

  
  
})