let traduciendo = false;

async function traducirTexto(){

    if(traduciendo){
        return;
    }

    const texto =
        document
        .getElementById("texto")
        .value
        .toLowerCase()
        .trim();

    if(texto === ""){

        alert("Escribe una frase.");

        return;
    }

    const estado =
        document.getElementById("estado");

    const boton =
        document.getElementById("btnTraducir");

    traduciendo = true;

    boton.disabled = true;

    estado.innerHTML =
        "Traduciendo...";

    const palabras =
        texto.split(/\s+/);

    let secuencia = [];

    for(const palabra of palabras){

        if(diccionario[palabra]){

            secuencia.push({

                tipo:"gif",

                ruta:diccionario[palabra]

            });

        }else{

            for(const letra of palabra){

                if(alfabeto[letra]){

                    secuencia.push({

                        tipo:"letra",

                        ruta:alfabeto[letra]

                    });

                }

            }

        }

        secuencia.push({

            tipo:"espacio"

        });

    }

    await mostrarSecuencia(secuencia);

    estado.innerHTML =
        "✅ Traducción completada";

    boton.disabled = false;

    traduciendo = false;
}