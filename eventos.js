// creacion del evento propio como puede ser {"look"}







var evt= new Event('look',{bubbles:true, cancelable:false})




// en otra rama de la app lo llamo con el add event listener

document.addEventListener("look", event=>{
    console.log("look event", event);

    evt.data={
        value:"atroden la tenes"
    }
    
    })
    document.dispatchEvent(evt)