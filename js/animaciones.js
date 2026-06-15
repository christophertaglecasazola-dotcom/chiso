function esperar(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );

}


async function mostrarSecuencia(lista){

    const imagen =
        document.getElementById("imagenSeña");

    for(let ruta of lista){

        imagen.src = ruta;

        await esperar(1500);

    }

}