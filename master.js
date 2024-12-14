<<<<<<< HEAD



const a= _=>{
let random= Math.random() // 0 0.9999
random*= 10 //0 y 9.9999
random= parseInt(random)

return ++random
}

for(i=0; i<10; i++)console.log(a());


const b=()=> ({nombre:"nico", apellido:"jogelino"})    


console.log(b());

var fecha= ["17/11/2024"]

const c=function(f){
f[0]=f[0]+ " "+ "12:45"
console.log(f);

}

console.log(fecha);
c(fecha)
console.log(fecha);

let titulo= document.querySelector(".titulo")
titulo.addEventListener("mouseover",()=>{
    titulo.classList.add("colores")
})
 const items= document.querySelectorAll('li')


 const color= ["blue", "green", "000","#ff8000", "rgb(255,0,255)"]
for(i=0; i<items.length; i++){
    items[i].innerHTML=`elemento numero ${i+1}`
   items[i].style.color=color[i]
   items[i].style.backgroundColor=i%2==0 ? "#000": "#111"
}


const suma = (a,b)=> a + b



function operacion(a,b,cb) {
  return  cb(a,b)
    
}
let n1= 1, n2=5

console.log(`la suma entre ${n2} y ${n1} es ${operacion(n1,n2, (x,t)=> x + t)}`)



function uno(params) {
    return console.log("soy la funcion uno");
    
}

function dos() {
    return console.log("soy la funcion 2");
    
}
let btn= document.querySelector(".btn")


btn.addEventListener("click", uno)
btn.addEventListener("click", dos)

setTimeout(()=>{
    console.log("aca arranco",new Date().toLocaleString());
btn.removeEventListener("click", dos)
    console.log("aca termino", new Date().toLocaleString())
    
}, 3000)


let link= document.getElementById("link")
link.addEventListener("click", (e)=> {
    e.preventDefault()
   
    console.log("Inicio", new Date().toLocaleString());
    setTimeout(()=>{
        window.location.href="http://www.google.com"
        console.log("Fin", new Date().toLocaleString());
        
        
    },2000)
})


//propagacion de eventos
var one= document.getElementById("one")
var doss= document.getElementById("dos")
var tres= document.getElementById("tres")

tres.addEventListener("click",()=>{
    console.log("click en tres");
    
},true)
doss.addEventListener("click",()=>{
    console.log("click en dos");
    
},true)
one.addEventListener("click",()=>{
    console.log("click en uno");
    
},true)
console.clear()

var botonCreado= false

var estatico= document.getElementById("estatico")

estatico.addEventListener("click",()=>{
    console.log("boton estático")
    if (!botonCreado) {
            var dinamico= document.createElement("button")
    dinamico.innerHTML= "boton dinamico"
    document.body.appendChild(dinamico)
    dinamico.id="dinamico"

    botonCreado= true
    }
    
})


document.addEventListener("click",(e)=>{
    if (e.target.id == "dinamico") {
          console.log("click en dinamico")
    }
    document.dispatchEvent(ev)
})

document.addEventListener("look",()=>{
    console.log("look!")
})
var ev= new Event("look", {bubbles:true,cancelable:true})





var btnlook= document.getElementById("btn-look")
btnlook.addEventListener("click",()=>{
    document.dispatchEvent(ev)
})


    
var time= setInterval(()=>{
   console.log( new Date().toLocaleString())
    console.log("probando set interval")
},3000)

console.log(new Date().toLocaleString())
setTimeout(()=>{
console.log("programa terminado")
clearInterval(time)
},10000)
=======
var a= document.getElementById("x")

var b= a.parentNode;
b.removeChild(a)

/*const b= document.getElementById("elements")
const a= document.getElementById("elementToRemove")
const parentNoda= b.parentNode
parentNoda.removeChild(b)*/


var c= document.getElementById("option")

c.addEventListener("change", event =>{
    console.log("select change", event.target)
    console.dir(event.target.value);
    
})





const form= document.querySelector("#form")

form.addEventListener("submit", event =>{
    event.preventDefault() // una vez hecho el prevent defaout, se detiene la pagina a fin de ser pasible
    console.log("form submit") // se ejecuta un console.log
    console.dir(event.target); // se ve todo aquello pasible, por lo cual puede ser sometida el evento 
                                    //en este caso el evento "submit", y desprende una cantidad ubérrima de propiedades
                                // que son todas de la variable que tiene asignada un elemento del dom


    for(let i= 0; i < event.target.length; i++){
        const element= event.target[i]
        
        if(element.tagName === 'INPUT'){
            
            element.classList.remove("fail")
            
            if(element.value !== '')

                {console.log("OK");    

                }else{
                        element.classList.add("fail")
                        console.log("FAIL")  }


            
        }
    }})


    
>>>>>>> 18845af (agregando archivos)
