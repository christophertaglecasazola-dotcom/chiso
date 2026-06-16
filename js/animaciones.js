function esperar(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );

}

async function mostrarSecuencia(lista){

    const imagen =
        document.getElementById("imagenSeña");

    for(const item of lista){

        if(item.tipo === "espacio"){

            imagen.src = "";

            await esperar(800);

            continue;
        }

        imagen.src = "";

        await esperar(50);

        imagen.src = item.ruta;

        if(item.tipo === "gif"){

            await esperar(2500);

        }else{

            await esperar(1000);

        }

    }

    imagen.src = "";
}