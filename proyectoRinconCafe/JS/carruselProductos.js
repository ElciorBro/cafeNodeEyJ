const cantidadMostrada = (size) => {
    let numCols = 4;
    if (size < 768) {
        numCols = 2; // 2 columnas para dispositivos móviles
    } else if (size < 992) {
        numCols = 3; // 3 columnas para tabletas
    }

    return numCols;
}

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

const showCards = (index, listElement, longitud) => {
    listElement.forEach((card) => {
        card.classList.add('sacar-producto');
        card.classList.remove('mostrar-producto', 'mover-izquierda', 'mover-derecha');
    });

    for (let i = index; i < index + longitud && i < listElement.length; i++) {
        listElement[i].classList.add('mostrar-producto');
        listElement[i].classList.remove('sacar-producto', 'mover-izquierda', 'mover-derecha');
    }
}

const moveLeftCards = (index, listElement , longitud) => {
    for (let i = index; i < index + longitud && i < listElement.length; i++) {
        listElement[i].classList.add('move-left-out');
        listElement[i].classList.remove('mostrar-producto');
        listElement[i + longitud].classList.add('move-left-in')
    }
}

const moveRightCards = (index, listElement, longitud) => {
    for (let i = index; i < index + longitud && i < listElement.length; i++) {
        listElement[i].classList.add('move-right-out');
        listElement[i].classList.remove('mostrar-producto','move-left-in', 'move-left-out');
        listElement[i + longitud].classList.add('move-right-in')

    }
}

const carouselProducts = () => {
    const screenSize = detectarTipoPantalla()
    const cantidad = cantidadMostrada(screenSize)

    const cards = document.querySelectorAll(".product-card");
    const currentIndex = 0

    showCards(currentIndex, cards, cantidad)

    // Botón para avanzar a las siguientes 4 cards
    document.getElementById("nextProduct").addEventListener("click", function () {
        moveLeftCards(currentIndex, cards, cantidad)
        currentIndex += 4;
        showCards(currentIndex, cards, cantidad);
    });

    // Botón para retroceder a las 4 cards anteriores
    document.getElementById("prevProduct").addEventListener("click", function () {
        if (currentIndex >= 4) {
            moveRightCards(currentIndex, cards, cantidad);
            currentIndex -= 4;
            showCards(currentIndex, cards, cantidad);
        } else if (currentIndex == 0) {
            moveRightCards(currentIndex, cards, cantidad);
            currentIndex += 4;
            showCards(currentIndex, cards, cantidad);
        }
    });
}

document.addEventListener("DOMContentLoaded", carouselProducts);