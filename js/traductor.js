async function traducirTexto(){

    const texto =
        document
        .getElementById("texto")
        .value
        .toLowerCase()
        .trim();

    if(texto === ""){
        return;
    }

    const estado =
        document.getElementById("estado");

    estado.innerHTML =
        "Traduciendo...";

    const palabras =
        texto.split(" ");

    let secuencia = [];

    for(let palabra of palabras){

        if(diccionario[palabra]){

            secuencia.push(
                diccionario[palabra]
            );

        }
        else{

            for(let letra of palabra){

                if(alfabeto[letra]){

                    secuencia.push(
                        alfabeto[letra]
                    );

                }

            }

        }

    }

    await mostrarSecuencia(
        secuencia
    );

    estado.innerHTML =
        "Traducción completada";

}
