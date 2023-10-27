document.addEventListener("DOMContentLoaded", function() {
    const song = document.getElementById("song");
    const play = document.getElementById("play");
    const iconplay = document.getElementById("icon-play")
    const progreso = document.getElementById("progreso");
    const inicio = document.getElementById("inicio");
    const fin = document.getElementById("fin");
    const barraDeProgreso = document.querySelector(".barra-de-progreso");
    const back =document.getElementById("back");
    const next = document.getElementById("next");

    back.addEventListener("click" , function(){
        window.location.href="index.html"
    })

    next.addEventListener("click" , function(){
        window.location.href="song2.html"
    })
  


    play.addEventListener("click", function() {
        if (song.paused) {
            song.play();
            iconplay.src="img/play-stop.svg"
        } else {
            song.pause();
            iconplay.src="img/Play_fill.svg"
        }
    });

    song.addEventListener("timeupdate", function() {
        const tiempoActual = Math.floor(song.currentTime);
        const duracionTotal = Math.floor(song.duration);
        const porcentajeProgreso = (tiempoActual / duracionTotal) * 100;
        progreso.style.width = porcentajeProgreso + "%";

        const minutosActuales = Math.floor(tiempoActual / 60);
        const segundosActuales = tiempoActual % 60;
        
        const minutosTotales = Math.floor(duracionTotal / 60);
        const segundosTotales = duracionTotal % 60;
        
        const tiempoActualFormato = `${minutosActuales}:${segundosActuales < 10 ? '0' : ''}${segundosActuales}`;
        const duracionTotalFormato = `${minutosTotales}:${segundosTotales < 10 ? '0' : ''}${segundosTotales}`;


        
        inicio.innerHTML = tiempoActualFormato;
        fin.innerHTML = duracionTotalFormato;
        
        
    });

    // Agregar evento de clic a la barra de progreso
    barraDeProgreso.addEventListener("click", function(e) {
    // Obtener las dimensiones y la posición de la barra de progreso
    const barraDeProgresoRect = barraDeProgreso.getBoundingClientRect();

    // Calcular la posición horizontal (coordenada X) en la que se hizo clic
    const clickX = e.clientX - barraDeProgresoRect.left;

    // Obtener el ancho total de la barra de progreso
    const barraAncho = barraDeProgresoRect.width;

    // Calcular el porcentaje de la posición de clic con respecto al ancho total
    const porcentajeClic = (clickX / barraAncho) * 100;

    // Calcular el tiempo de reproducción correspondiente a la posición de clic
    const tiempoNuevo = (porcentajeClic / 100) * song.duration;

    // Establecer la nueva posición de reproducción del audio en el tiempo calculado
    song.currentTime = tiempoNuevo;
});

    
});
