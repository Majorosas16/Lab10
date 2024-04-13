import { cargaInformacion } from "./util.js";

const render =  async () => {

    const respuesta = await cargaInformacion();
    console.log(respuesta);

    const contenedor = document.querySelector("#us-offer");

    for (const producto of respuesta.familiaProductos){
        const tarjeta = document.createElement("div");
        tarjeta.id =producto.id;

        const img = document.createElement("img");
        img.alt=producto.nombre;
        img.src=producto.imagen;
        
        tarjeta.appendChild(img);
        contenedor.appendChild(tarjeta);


    }

};
document.addEventListener("DOMContentLoaded", render);