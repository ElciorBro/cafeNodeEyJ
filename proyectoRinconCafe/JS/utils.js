 function detectarTipoPantalla() {
    // Obtenemos el ancho de la ventana del navegador
    const anchoVentana = window.innerWidth;
  
    // Verificamos el ancho para determinar el tipo de pantalla
    if (anchoVentana < 576) {
        console.log("Pantalla pequeña (móvil)'")
        return anchoVentana;
    } else if (anchoVentana >= 576 && anchoVentana < 992) {
        console.log("Pantalla mediana (tableta)")
        return anchoVentana;
    } else if (anchoVentana >= 992 && anchoVentana < 1200) {
        console.log("Pantalla grande (protatil)")
        return anchoVentana;
    } else {
        console.log("Pantalla extra grande (escritorio)")
        return anchoVentana;
    }
}

const cantidadMostrada = (size) => {
    let numCols = 4;
    if (size < 768) {
        numCols = 2; // 2 columnas para dispositivos móviles
    } else if (size < 992) {
        numCols = 3; // 3 columnas para tabletas
    }

    return numCols;
}

function crearEstrellas(cantidad, nodoPadre) {  
    // Validar que el elemento padre exista y que la cantidad sea válida
    if (!nodoPadre || cantidad < 1 || cantidad > 5) {
      console.error('Error: Elemento padre no válido o cantidad de estrellas incorrecta.');
      return;
    }
  
    // Crear las estrellas completas
    for (let i = 0; i < Math.floor(cantidad); i++) {
      const estrellaCompleta = document.createElement('i');
      estrellaCompleta.classList.add('bi', 'bi-star-fill');
      nodoPadre.appendChild(estrellaCompleta);
    }
  
    // Crear la estrella media si la cantidad tiene decimales
    if (cantidad % 1 !== 0) {
      const estrellaMedia = document.createElement('i');
      estrellaMedia.classList.add('bi', 'bi-star-half');
      nodoPadre.appendChild(estrellaMedia);
    }
}
  

const showCards = () => {
    const cardsContainer = document.getElementById('cards-container');

    let numCols = 4
    if (window.innerWidth < 768) {
        numCols = 2; // 2 columnas para dispositivos móviles
    } else if (window.innerWidth < 992) {
        numCols = 3; // 3 columnas para tabletas
    }

    for (let i = 0; i < numCols; i++) {
        // card container
        let card = document.createElement('div');
        card.classList.add('product-card')
        
        // img container
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('product-image-container');

        // img
        let img = document.createElement('img');
        img.src = productos[i].img;
        img.alt = productos[i].title;
        img.classList.add('product-imagen');
        imgContainer.appendChild(img)

        // agregar imagen
        card.appendChild(imgContainer);

        // info container
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('product-card-info');

        // Titulo
        let cardTitle = document.createElement('h3');
        cardTitle.textContent = productos[i].title;
        cardTitle.classList.add('product-title');

        // agregar titulo
        cardInfo.appendChild(cardTitle);

        // calificacion
        let cardCalification = document.createElement('div');
        cardCalification.classList.add('product-calification')
        crearEstrellas(productos[i].calification, cardCalification);

        // agregar calificacion
        cardInfo.appendChild(cardCalification)

        // descripcion
        let cardDescription = document.createElement('p');
        cardDescription.textContent = productos[i].description
        card.classList.add('product-description');

        // agregar descripcion
        cardInfo.appendChild(cardDescription);

        // card info agregado
        card.appendChild(cardInfo);


        // seccion compra
        let productBuy = document.createElement('div');
        productBuy.classList.add('buy-product', 'd-flex', 'justify-content-space-evenly', 'align-items-center')

        // precio
        let productPrice = document.createElement('p');
        productPrice.textContent = productos[i].price
        productPrice.classList.add('product-price');

        // agregar precio
        productBuy.appendChild(productPrice);

        // Boton compra
        let productButton = document.createElement('button');
        productButton.textContent = 'Comprar';

        // agregar button
        productBuy.appendChild(productButton);

        // seccion compra agregar
        card.appendChild(productBuy);

        cardsContainer.insertBefore(card, cardsContainer.lastElementChild);
    }
}

  // Llama a la función showCards después de que se haya cargado el DOM
  document.addEventListener("DOMContentLoaded", () => {
    showCards();
  });