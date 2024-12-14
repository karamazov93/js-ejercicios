var form= document.getElementById("form")
var input=  document.getElementById("input")

form.addEventListener("submit",e=>{
    e.preventDefault()
    //con expresiones regulares




let valor= input.value

let regexp= /^\w{5,10}$/

if (regexp.test(valor)) {
    console.log("bienvenido");
    
    
}else{
    alert("error")
    console.log("segui participando loro");
}






// con trim()

//let valortrim= valor.trim()
//let trimlen= valortrim.length



//console.log(valortrim.includes(" "));

//console.log(encodeURIComponent(trimlen));
  


})


