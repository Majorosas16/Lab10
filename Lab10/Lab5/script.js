import { cargaInformacion } from "./util.js";

const render =  async () => {

    const respuesta = await cargaInformacion();
    console.log(respuesta);

        //EL TÍTULO DE "NUESTROS PRODUCTOS ESTRELLA"
        const contenedor2 = document.querySelector("#us-offer2");//SECTION DE LAS PROMOCIONES
        contenedor2.classList.add("sect_22");

    
        const txt =document.createElement("p");
        txt.innerHTML="Nuestros Productos Estrella"
        txt.classList.add("section_title");

        const divContador= document.createElement("div")
        divContador.classList.add("contador");

        const btnReinicio = document.createElement("button");
        btnReinicio.innerHTML="Reiniciar aquí"
        btnReinicio.classList.add("botonContador");

        const btnText = document.createElement("p");
        btnText.innerHTML="Presiona el Carrito de Compras de los productos para que aparezca el contador"
        btnText.classList.add("textoContador");

        contenedor2.appendChild(txt);

        divContador.appendChild(btnText);
        divContador.appendChild(btnReinicio);


        contenedor2.appendChild(divContador);


    const contenedor = document.querySelector("#us-offer");//SECTION DE LAS PROMOCIONES
    contenedor.classList.add("sect_2");

    //AHORA VIENEN LAS IMAGENES
    for (const producto of respuesta.familiaProductos){
       
        const tarjeta = document.createElement("div"); //DIV QUE CONTIENE TODAS LAS TARJETAS (DIV: US-OFFER)
        tarjeta.id =producto.id;
        tarjeta.classList.add("us-offer");

        const eachTarjeta = document.createElement("div"); //LA TARJETA DEL PRODUCTO (CONTIENE LOS TXT, IMAGEN Y EL A) (OFFER)
        eachTarjeta.classList.add("offer");


        const divImagen = document.createElement("div"); //(OFFER-IMG)
        divImagen.classList.add("offer-img");
        
        const img = document.createElement("img");
        img.alt=producto.nombre;
        img.src=producto.imagen;

        divImagen.appendChild(img);

        const parteAbajo = document.createElement("div"); // PARTE ABAJO DE LA IMAGEN(OFFER-PRICE)
        parteAbajo.classList.add("offer-price");

        const ml = document.createElement("h3");
        ml.innerHTML=producto.contenido;
        ml.classList.add("price-subtitle");

        const divTitleSubtitle = document.createElement("div");
        divTitleSubtitle.classList.add("price-price")

        const title = document.createElement("h3");
        title.innerHTML=producto.nombre;
        title.classList.add("price-price1");

        const subtitle = document.createElement("h4");
        subtitle.innerHTML=producto.precio;
        subtitle.classList.add("price-price2");

        const descrip = document.createElement("p");
        descrip.innerHTML=producto.descripcion;
        descrip.classList.add("offer-pricep");

        const divBotones =document.createElement("div");
        divBotones.classList.add("botones");

        const detalles = document.createElement("a");
        detalles.href="#";
        detalles.innerHTML="Mas detalles";
        detalles.classList.add("Details");

        const btn = document.createElement("button");
        btn.innerHTML="Añadir al Carrito de Compras"
        btn.classList.add("botonContador");

        divBotones.appendChild(detalles);
        divBotones.appendChild(btn);

        parteAbajo.appendChild(ml);
        divTitleSubtitle.appendChild(title);
        divTitleSubtitle.appendChild(subtitle);
        parteAbajo.appendChild(divTitleSubtitle);
        parteAbajo.appendChild(descrip);
        parteAbajo.appendChild(divBotones);
        parteAbajo.appendChild(btn);


        eachTarjeta.classList.add("offer");
        img.classList.add("offer-img");

//AGREGO TODO AQUÍ
        eachTarjeta.appendChild(divImagen);
        eachTarjeta.appendChild(parteAbajo);
        tarjeta.appendChild(eachTarjeta);
        contenedor.appendChild(tarjeta);

        
        let contadorClics = 0;

        btn.addEventListener ("click", function() {
            contadorClics++;
            btnText.textContent = `Haz presionado el carrito de ${producto.nombre}: ${contadorClics} veces`;
        });

        btnReinicio.addEventListener ("click", function() {
            contadorClics=0;
            btnText.textContent = `Presiona el Carrito de Compras de los productos para que aparezca el contador`;
        });

    }

};
document.addEventListener("DOMContentLoaded", render);