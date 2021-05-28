function irArriba(){

    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
            botonArriba.style.left = 850 + "px";
        }
        else{
            botonArriba.style.left = -900 + "px";
        }
    })
}

irArriba();