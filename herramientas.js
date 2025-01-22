
const productos = {
    pared: [
        { nombre: "Moistek Tekno S/. 25.00", imagen: "imagenes/moistek-tekno.png", descripcion: "Es ideal para paredes de concreto, cartón prensado, fibrocemento expuestos a constante humedad y sobre superficies salitrosas adecuadamente preparadas.mante...", telefono: "+51 933 130 881" },
        { nombre: "Temple Majestad", imagen: "imagenes/temple.webp", descripcion: "El Temple Majestad es una pasta blanca acuosa que se utiliza para imprimar y empastar superficies en interiores y exteriores. Es ideal para blanquear y decorar paredes, techos, cercos, jardines y señalización de árboles.", telefono: "+51 933 130 881" },
        { nombre: "Temple Pato", imagen: "imagenes/Temple-pato-2.jpg", descripcion: "El temple pato es un imprimante económico que se usa para preparar y nivelar paredes interiores. Es ideal para superficies de concreto, yeso y adobe. ", telefono: "+51 933 130 881" },
        { nombre: "Temple Sinolit", imagen: "imagenes/Temple-fino-sinolit-2.jpg", descripcion: "Ideal para nivelar, tapar porosidad y mejorar superficies, puede utilizarse como imprimante antes de aplicar sellador, preparando la superficie para una pintura perfecta.", telefono: "+51 933 130 881" },
        { nombre: "Pasta Mural Anypsa", imagen: "imagenes/pasta-mural.jpg", descripcion: "Producto de relleno elaborado a base de resina acrílica esterinada, cargas especiales, libre de preservantes mercuriales.", telefono: "+51 933 130 881" },
        { nombre: "Yeso Cerámico Martell", imagen: "imagenes/yeso-ceramico-martell.webp", descripcion: "Material complementario en obras de edificación y para revestir paredes de ladrillo. Para instalar falsos techos o cielos rasos. Para resanar figuras cerámicas. Para corrección de suelos salinos o alcalinos y suelos sódicos, como aportante de calcio y azufre.", telefono: "+51 933 130 881" },
        { nombre: "Sellador Martell", imagen: "imagenes/sellador-cppwebp.webp", descripcion: "Excelente capa de adherencia transparente optimizando el rendimiento de pintura. Ideal para paredes nuevas. ", telefono: "+51 933 130 881" },
        { nombre: "Cola Martell", imagen: "imagenes/cola-martell.webp", descripcion: "Ideal para la industria maderera y cartonera. Adhiere papel, carton y madera.", telefono: "+51 933 130 881" },
    ],
    // ... otras categorías con sus productos y teléfonos
    acabado: 
    [
        { nombre: "Pintura cpp Pato", imagen: "Acabado/cpp-pato.png", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura cpp Satinado", imagen: "Acabado/cpp-satinado.jpeg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura cpp Duralatex", imagen: "Acabado/cpp-duralatex.png", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura cpp Pato plus", imagen: "Acabado/cpp-patoPLus.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura vencedor Vencelatex", imagen: "Acabado/Vencelatex.png", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura vencedor satinado", imagen: "Acabado/vencedor-satinado.png", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura vencedor Supermate", imagen: "Acabado/vencedor-supermate.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura fast", imagen: "Acabado/fast.avif", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura fast Satinado", imagen: "Acabado/fast-satinado.webp", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura anypsa Masterlast", imagen: "Acabado/masterlast-anypsa24.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura anypsa Decorlast", imagen: "Acabado/decorlast-anypsa24.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura anypsa Satinlast", imagen: "Acabado/satinlast-anypsa24.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura anypsa Eurolas", imagen: "Acabado/eurolast-anypsaT.webp", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura American Colors Satinado ", imagen: "Acabado/Imagen de WhatsApp 2025-01-19 a las 17.42.48_31aae436.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
        { nombre: "Pintura American Colors Mate", imagen: "Acabado/AmericanColora -mate.jpg", descripcion: "Acabado", telefono: "+51 933 130 881" },
       

    ],
    madera: [
        { nombre: "Pegamento de contacto Multiusos Tekno 1Gln", imagen: "madera/pegamento-contacto-tekno-1gln.jpg", descripcion: "Para madera", telefono: "+51 933 130 881" },
        { nombre: "Pegamento de contacto Multiusos Tekno 17 Lts", imagen: "madera/pegamento-contacto-tekno-17lts.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Terochap Tekno 1 Gln", imagen: "madera/terochap-tekno-1gln.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Terochap Tekno 17 Lts", imagen: "madera/terochap.tekno-17lts.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Barniz Marino Tekno", imagen: "madera/Barniz-marino-tekno.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Barniz Alquidico Hidrorepelente Tekno", imagen: "madera/barniz-alquidico-tekno.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Dd Tekno", imagen: "madera/DD-tekno.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Dulll sealer  Tekno", imagen: "madera/Dull selaer-tekno.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Dd Tekno", imagen: "madera/DD-tekno.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Base Piroxicilina", imagen: "madera/basepirixilina.jpeg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "DD Barniz Paracas", imagen: "madera/paracasddbarniz.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Laca Selladora Paracas", imagen: "madera/lacaSelladora-paracas.webp", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Barniz Marino Paracas", imagen: "madera/barniz-marino-paracas.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Barniz Paracas ", imagen: "madera/Barniz_nogal_Paracas_-_1_700x700.webp", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Tintes para Madena Paracas", imagen: "madera/tinte-paracas.avif", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Fondo Lijable Poliuretano Anypsa", imagen: "madera/fondoLijable-anypsa.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Parafinico poliéster anypsa", imagen: "madera/parafinico-poliester-anypsa.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Laca Premium  anypsa", imagen: "madera/laca-premiun-anypsa.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "laca Piroxilina anypsa", imagen: "madera/laca-piroxilina-anypsa.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "laca Piroxilina Krystal anypsa", imagen: "madera/laca-piroxilina-kristal-anypsa.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
        { nombre: "Pintura para Pizarra anypsa", imagen: "madera/pinturade-pizarra.jpg", descripcion: " Para madera", telefono: "+51 933 130 881" },
     


    ],
    automotriz: [
        { nombre: "Gloss X3 Anypsa", imagen: "Automotriz/Anypsa-x3-gloss.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Gloss Losaro ", imagen: "Automotriz/Gloss-losaro.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Super Gloss CPP ", imagen: "Automotriz/super-gloss-cpp.webp", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "3T Master Gloss", imagen: "Automotriz/3t-mastergloss.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Super Gloss Felinsa", imagen: "Automotriz/super-gloss-felinsa.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Bonn Gloss", imagen: "Automotriz/BONN-GLOSS-1GL-scaled.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Tekno Gloss", imagen: "Automotriz/gloss-tekno.png", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
      
        { nombre: "Poliuretano Automotriz Anypsa z4 7500", imagen: "Automotriz/poliuretano-anypsa-z4-7500.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Esmalte Monocapa CPP Ayrthane", imagen: "Automotriz/cpp-monocapa-1.png", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Bi Capa X5 600 Anypsa", imagen: "Automotriz/Anypsa-x5-6000-bicapa.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Pasta de Pulir Karpix", imagen: "Automotriz/karpix-pastade-pulir.png", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Masilla Automotriz Nascar Plus Anypsa", imagen: "Automotriz/nascar-plus-nuevo.png", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Masilla Automotriz Anypsa Bonflex", imagen: "Automotriz/Anypsa-bonflex.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Masilla Automotriz x4 Anypsa ", imagen: "Automotriz/MasillagrisAnypsa_x4.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Masilla Automotriz CarPlast Anypsa", imagen: "Automotriz/Anypsa-carplast.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
    
    
    ],
    industrial: [


        { nombre: "Esmalte Epóxico Alta Duración + Catalizador Epóxico + Disolvente Epóxico.", imagen: "Automotriz/Epoxico-juego-naval-anypsa1.png", descripcion: "Envase de hojalata de 3/4 Gl. (2.839 L.) de Esmalte Epóxico Alta Duración + 1/4 Gl. (0.900 ml.) de Catalizador Epóxico + 1/4 GL. de plástico (900 ml.) de Disolvente Epóxico.", telefono: "+51 933 130 881" },
        { nombre: "Pintura Para Tráfico Maestro", imagen: "Automotriz/anypsa-trafico-maestro.jpg", descripcion: "Envase de hojalata de 1 Gl. (3.785 L.), 1/4 Gl. (0.900 L.), 1/8 Gl. (0.473 L.), 1/32 Gl. (0.118 L.), cilindro de 55 Gl.", telefono: "+51 933 130 881" },
        { nombre: "Base al aceite gris Anypsa", imagen: "Automotriz/BaseaceitegrisAnypsa.jpg", descripcion: "Producto Industrial", telefono: "+51 933 130 881" },

        { nombre: "Pintura Base al Aceite Maestro - Base anticorrosiva para metal - Pinturas ANYPSA ", imagen: "Automotriz/anypsa-base-maestro.jpg", descripcion: "Producto Industrial", telefono: "+51 933 130 881" },
        { nombre: "Etching Primer X6 - Pinturas ANYPSA ", imagen: "Automotriz/Anypsa-x6-etching-lata.jpg", descripcion: "Producto Industrial", telefono: "+51 933 130 881" },
        { nombre: "Base Epóxica Titanic - Anticorrosivo para tanques de fierro, bombas - Pinturas ANYPSA ", imagen: "Automotriz/anypsa-base-apoxico-titanic.jpg", descripcion: "Producto Industrial", telefono: "+51 933 130 881" },
      
    ],
    diluyentes: [
        { nombre: "Thinner extra acrilico Anypsa", imagen: "diluyente/Thinner extra acrilico Anypsa.webp", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "Thinner Extra 1 galón Issa", imagen: "diluyente/Thinner Extra 1 galón Issa.webp", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "Activador para Etching Primer X6 - Pinturas ANYPSA", imagen: "diluyente/Activador para Etching Primer X6 - Pinturas ANYPSA.jpg", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "DISOLVENTE P/PINTURA TRAFICO MAESTRO 1GLN ANYPSA", imagen: "diluyente/DISOLVENTETRAFICO MAESTRO 1GLN ANYPSA.avif", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "Disolvente Epóxico - Recubr. Industr. Y Marinos Titanic - Pinturas ANYPSA", imagen: "diluyente/DISOLVENTE TITANIC.jpg", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "Catalizador Epóxico - Pinturas ANYPSA", imagen: "diluyente/Catalizador Epóxico - Pinturas ANYPSA.png", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "Combo Epóxico Titanic - Base + Catalizador + Disolvente - Pinturas ANYPSA", imagen: "diluyente/Combo Epóxico Titanic - Base + Catalizador + Disolvente.jpg", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "DiluKit Etching Primer X6 - Automotriz - Pinturas ANYPSAyente", imagen: "diluyente/Kit Etching Primer X6 - Automotriz - Pinturas ANYPSA.jpg", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
      
        { nombre: "Removedor de laca y esmalte - Removedor Veloz X7000 - Pinturas ANYPSA", imagen: "diluyente/Removedor de laca y esmalte X7000 - ANYPSA.jpg", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "Transformador de oxido Bencina Anypsa", imagen: "diluyente/bencina-anypsa.png", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
        { nombre: "ANYPSA – X5 6000 ACRYLIC LACQUER ", imagen: "diluyente/T3-ANYPSA-X5.png", descripcion: "Producto Diluyente", telefono: "+51 933 130 881" },
    ],
    herramientas: [
        { nombre: "Pistola para pintar gravedad LVMP vaso aluminio boquilla 1.4 mm Truper TRUPER ", imagen: "ferreteria/Pistola para pintar gravedad LVMP vaso aluminio.avif", descripcion: "Producto Ferreteria ", telefono: "+51 933 130 881" },
        { nombre: "AMOLADORA DE 4 1/2 - 800W TRUPER", imagen: "ferreteria/AMOLADORA DE800W TRUPER.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "TaTaladro Percutor 1/2 600W 50000 gpm Truper", imagen: "ferreteria/TaTaladro Percutorgpm Truper.jpg", descripcion: "Producto automotriz", telefono: "+51 933 130 881" },
        { nombre: "Brocha tumi 4", imagen: "ferreteria/Brocha tumi.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Rodillos Toro", imagen: "ferreteria/RODILLO TORO.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "RODILLO ANTIGOTEO 15CM Atlas", imagen: "ferreteria/RODILLO ANTIGOTEO 15CM.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "CINTA-MASKING TAPE-PEGAFAN-x-18M", imagen: "ferreteria/CINTA-MASKING TAPE-PEGAFAN.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "JUEGO DE BROCAS CIL COB 1-13 MM", imagen: "ferreteria/JUEGO DE BROCAS CIL COB 1-13 MM.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Juego de 3 brocas escalonadas Truper 100988 ", imagen: "ferreteria/Juego de 3 brocas escalonadas Truper 100988.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Juego De 4 Brocas Para Concreto Truper", imagen: "ferreteria/Juego De 4 Brocas Para Concreto Truper.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Juego de Brocas para Madera 8 Piezas Truper 11338", imagen: "ferreteria/Juego de Brocas para Madera 8 Piezas Truper 11338.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Aplicador de Silicona, Tipo Esqueleto Reforzado", imagen: "ferreteria/Aplicador de Silicona, Tipo Esqueleto Reforzado.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Iluminación de techo Luz empotrada", imagen: "ferreteria/Iluminación de techo Luz empotrada.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Spot para Empotrar Redondo LED Luz Fría 9W", imagen: "ferreteria/Spot para Empotrar Redondo LED Luz Fría 9W.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Discos Norton de 4-1/2", imagen: "ferreteria/Discos Norton de.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Discos Pretul de 4-1/2", imagen: "ferreteria/Discos Pretul de.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Disco de diamante Truper de 4' x 1.6 mm", imagen: "ferreteria/Disco de diamante Truper.avif", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Disco Diamantado Concreto Kamasa KM1515", imagen: "ferreteria/Concreto Kamasa KM1515.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "DISCO SIERRA Truper 4-1/2", imagen: "ferreteria/DISCO SIERRA truper.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "DISCO SIERRA DeWalt 4-1/2", imagen: "ferreteria/DISCO SIERRA DeWalt.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Martillo Galponero Imantado Mango Fibra 16 Oz Truper 19710", imagen: "ferreteria/Martillo Galponero Imantado Mango Fibra.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Escalera Tipo Tijera 3 Peldaños Truper Capacidad de Carga 150 Kg", imagen: "ferreteria/Escalera Tipo Tijera 3 Peldaños Truper.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Escalera Tijera de madera 8 pasos", imagen: "ferreteria/Escalera Tijera de madera 8 pasos.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Recogedor Económico ", imagen: "ferreteria/Recogedor Económico.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Trapos Industriales", imagen: "ferreteria/TRAPO-COSIDO1.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Plastico azul", imagen: "ferreteria/plastico azul.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Pintura en Spray ", imagen: "ferreteria/Pintura en Spray.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Alicate de Corte Punta 6", imagen: "ferreteria/Alicate de Corte Punta 6.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Alicate aislado universal de 7", imagen: "ferreteria/alicate aislante universal 7.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Varillas de soldadura", imagen: "ferreteria/Varillas de soldadura.png", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Disco Flap angular 4 1/2", imagen: "ferreteria/Disco Flap angular.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "DISCO ABRASIVO DESBASTE METAL 4-1/2", imagen: "ferreteria/DISCO ABRASIVO DESBASTE METAL.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Disco 4'' Copa Diamante Desbaste Piedra Concret Truper", imagen: "ferreteria/Copa Diamante Desbaste Piedra Concret Truper.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
       
        { nombre: "PLANCHA PULIR(empastar) M/GOMA ROJO KAMAZAKI", imagen: "ferreteria/PLANCHA PULIR(empastar) GOMA ROJO KAMAZAKI.jpg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "CARRETILLA BUGGY 120 LITROS 6 FT3 580 KG TOLVA DE PLASTICO", imagen: "ferreteria/CARRETILLA BUGGY 120 LITROS 6 FT3 580 KG TOLVA DE PLASTICO.jpeg", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Cerradura Andina 230", imagen: "ferreteria/Cerradura Andina 230.png", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        { nombre: "Cerradura para dormitorio Acero Inoxidable", imagen: "ferreteria/Cerradura para dormitorio Acero Inoxidable.webp", descripcion: "Producto Ferreteria", telefono: "+51 933 130 881" },
        

    ],
};

const categorias = document.querySelectorAll('#categorias button');
const productosContenedor = document.getElementById('productos-contenedor');

function mostrarProductos(categoria) {
    productosContenedor.innerHTML = '';

    const categoriaProductos = productos[categoria];
    if (categoriaProductos) {
        categoriaProductos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <button onclick="abrirWhatsApp('${producto.telefono}')">Comprar</button>
            `;
            productosContenedor.appendChild(productoDiv);
        });
    } else {
        productosContenedor.innerHTML = "<p>No hay productos en esta categoría.</p>";
    }
}

function abrirWhatsApp(telefono) {
    if (telefono) {
   
        const numeroTelefono = "+51 933 130 881"; // Reemplaza con tu número
        const mensaje = "Hola, quiero comprar " + telefono;
        const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
}

categorias.forEach(boton => {
    boton.addEventListener('click', () => {
        const categoria = boton.dataset.categoria;
        mostrarProductos(categoria);
        categorias.forEach(btn => btn.classList.remove('active'));
        boton.classList.add('active');
    });
});

mostrarProductos('pared');

