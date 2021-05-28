function irArriba(){

    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
            botonArriba.style.left = 80 + "%";
        }
        else{
            botonArriba.style.left = 110 + "%";
        }
    })
}

irArriba();