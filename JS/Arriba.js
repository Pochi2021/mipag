function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
            botonArriba.style.right = 10 + "px";
        }
        else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba();