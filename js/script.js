//DECALRÉ VARIABLES NECESARIAS
let carrito = [];
let botonRegistro = document.getElementById("button-register");
let carro = document.getElementById("carrito");
let divNft = document.getElementById("divNfts");
let inputBuscador = inputTexto.value;
let selectNft = document.getElementById('select-nft')
let botonSelect = document.getElementById('select-button')
let botonVaciar = document.getElementById("vaciar-carrito")
let divTotal = document.getElementById('total-carrito')
divTotal.textContent = `Total: 0`

//CREE LOS OBJETOS CORRESPONDIENTES A LAS NFT QUE TIENE LA TIENDA
class Nft {
    constructor(id, coleccion, nombre, descripcion, precio, divisa, img) {
        this.id = id;
        this.coleccion = coleccion;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.divisa = divisa;
        this.img = img;
    }
}

const ape1 = new Nft(
    1,
    "BORED APE",
    "Undead ape",
    "The Earth in 2136 is a very different place. The greed of humanity has plagued the world for decades. Environmental neglect has resulted in the mass destruction of habitats and diseases thrive in every major city. But the digital world isn’t immune, either. With wars raging in the real world, the digital world is abandoned.",
    99.0,
    "ETH",
    "./assets/images/undead-ape.jpg"
);
const ape2 = new Nft(
    2,
    "BORED APE",
    "Mutant ape",
    "The MUTANT APE  is a Mutant Ape that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.",
    169,
    "ETH",
    "./assets/images/mutant-ape.png"
);
const ape3 = new Nft(
    3,
    "BORED APE",
    "King ape",
    "The KING APE  is an Ape that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.",
    240,
    "ETH",
    "./assets/images/king-ape.webp"
);
const punk1 = new Nft(
    4,
    "CRYPTOPUNKS",
    "Cryptopunk #66",
    "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.",
    6,
    "ETH",
    "./assets/images/cryptopunk33.png"
);
const punk2 = new Nft(
    5,
    "CRYPTOPUNKS",
    "Cryptopunk #33",
    "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.",
    0.025,
    "ETH",
    "./assets/images/cryptopunk66.png"
);
const punk3 = new Nft(
    6,
    "CRYPTOPUNKS",
    "Cryptopunk #70",
    "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.",
    3.75,
    "ETH",
    "./assets/images/cryptopunk70.png"
);
const alliepunk1 = new Nft(
    7,
    "CRYPTOALLIENS",
    "Alliepunk #60",
    "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.",
    7,
    "ETH",
    "./assets/images/allienpunk1.jpg"
);
const alliepunk2 = new Nft(
    8,
    "CRYPTOALLIENS",
    "Alliepunk #48",
    "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.",
    2.34,
    "ETH",
    "./assets/images/allienpunk2.jpg"
);
const alliepunk3 = new Nft(
    9,
    "CRYPTOALLIENS",
    "Alliepunk #103",
    "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.",
    120,
    "ETH",
    "./assets/images/allienpunk3.jpg"
);

//CREE EL ARRAY QUE CONTIENE TODOS LOS NFTS
let nfts = [
    ape1,
    ape2,
    ape3,
    punk1,
    punk2,
    punk3,
    alliepunk1,
    alliepunk2,
    alliepunk3,
];

//FUNCIÓN PARA MOSTRAR Y CERRAR EL MODAL DE REGISTRO
const mostrarModal = () => {
    let modal_container = document.getElementById("modal_container");
    botonRegistro.addEventListener("click", () => {
        modal_container.classList.add("show");
    });
    const cerrar = document.getElementById("close");
    cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
    });
};

//FUNCIÓN PARA VALIDAR EL EMAIL
const validarEmail = (valor) => {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(valor)) {
        Toastify({
            text: "Bienvenido!",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}
        }).showToast();
    } else {
        Toastify({
            text: "Email inválido",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}
        }).showToast();;
    }
}


//FUNCIÓN PARA VALIDAR EL FORMULARIO
const validarForm = () => {
    let username = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //TODO ANDA, EXCEPTO QUE CUANDO EL EMAIL ES INVÁLIDO ME CREA IGUAL AL USUSARIO
    if (username == "" || password == "" || email == "" || validarEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal...',
            text: 'Debe completar todos los campos',
        })
    } else {
        let usuario = {
            username: username,
            password: password,
            email: email,
        };

        let usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem("Usuario", usuarioJSON);

        let usuarioParseado = JSON.parse(localStorage.getItem("Usuario"));
        botonRegistro.remove();
        let divRegistro = document.getElementById("register");
        divRegistro.innerHTML += `<p class = "login" > Hola ${usuarioParseado.username} !</p>`;

        console.log(usuarioParseado);
    }
}


//FUNCION PARA REGISTRAR, GUARDAR Y MOSTRAR EL USUARIO
const registro = () => {
    let formulario = document.getElementById("idForm");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        validarForm();
        formulario.reset();
    });
};

//FUNCIÓN PARA UTILIZAR EL BUSCADOR
const buscador = () => {
    let inputTexto = document.getElementById("inputTexto");
    inputTexto.addEventListener("change", () => {
        let buscador = inputTexto.value;
        let nftFiltrados = nfts.filter((nft) =>
            nft.coleccion.includes(buscador.toUpperCase())
        );
        divNft.innerHTML = "";
        nftFiltrados.forEach((nft) => {
            const divNftCard = document.createElement("div");
            divNftCard.classList.add("card");
            divNftCard.style.width = "18rem";

            let {
                id,
                nombre,
                precio,
                divisa,
                img,
                coleccion,
                descripcion
            } = nft

            const divNftContent = `
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <img src= "${img}">
        <p class="card-text">${coleccion}</p>
        <p class="card-text">${descripcion}</p>
        <p class="card-text">${precio} ${divisa}</p>
        <button id="boton${id}" class="btn btn-primary agregar-carrito"> Agregar al carrito</button>
        </div>
        `;

            divNftCard.innerHTML = divNftContent;
            divNftCard
                .querySelector(".agregar-carrito")
                .addEventListener("click", () => agregarCarrito(nft));
            divNft.append(divNftCard);
        });
    });
};

const opcionCambiada = () => {
    console.log("Cambio");
};
selectNft.addEventListener("change", opcionCambiada);

const mostrarConSelect = () => {
    let indice = selectNft.selectedIndex;
    let opcionSeleccionada = selectNft.options[indice];
    botonSelect.addEventListener('click', () => {
        alert(`Elegi ${opcionSeleccionada.text}`)


        // let nftFiltrados = nfts.filter((nft) =>
        //     nft.coleccion === opcionSeleccionada.text
        // );
        // nftFiltrados.forEach((nft) => {
        //     const divNftCard = document.createElement("div");
        //     divNftCard.classList.add("card");
        //     divNftCard.style.width = "18rem";

        //     let {
        //         id,
        //         nombre,
        //         precio,
        //         divisa,
        //         img,
        //         coleccion,
        //         descripcion
        //     } = nft

        //     const divNftContent = `
        // <div class="card-body">
        // <h5 class="card-title">${nombre}</h5>
        // <img src= "${img}">
        // <p class="card-text">${coleccion}</p>
        // <p class="card-text">${descripcion}</p>
        // <p class="card-text">${precio} ${divisa}</p>
        // <button id="boton${id}" class="btn btn-primary agregar-carrito"> Agregar al carrito</button>
        // </div>
        // `;

        //     divNftCard.innerHTML = divNftContent;
        //     divNftCard
        //         .querySelector(".agregar-carrito")
        //         .addEventListener("click", () => agregarCarrito(nft));
        //     divNft.append(divNftCard);
        // });
    })

}


//FUNCION AGREGAR AL CARRITO
const agregarCarrito = (nft) => {
    const divNftCard = document.createElement("div");
    if (carrito.includes(nft)) {
        Swal.fire({
            title: 'Ya esta en tu carrito!',
            text: 'Continuar con tu compra',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
    } else {
        Toastify({
            text: "Agregado correctamente",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            className: "added",
            style: {
                background: "linear-gradient(to right, #dcff03, #ede700, #f8ce00, #feb500, #ff9d0a)",
            },
            onClick: function () {}
        }).showToast();

        divNftCard.setAttribute("id", "nft-card");
        divNftCard.classList.add("card");
        divNftCard.style.width = "18rem";

        let {
            id,
            nombre,
            precio,
            divisa
        } = nft

        const divNftCardContent = `
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text"><i class="fa-brands fa-ethereum"></i> ${precio} ${divisa}</p>
                <a id="eliminar-${id}" class="btn-eliminar"><i class="fa-solid fa-trash-can"></i></a>
            </div>`;

        divNftCard.innerHTML = divNftCardContent;
        divNftCard
            .querySelector(".btn-eliminar")
            .addEventListener("click", (e) => eliminarNftDelCarrito(nft, e));
        carro.append(divNftCard);
        carrito = [...carrito, nft]
    }

    //TOTAL CARRITO
    if (carrito.length > 0) {
        let totalCarrito = carrito.reduce(
            (acc, ite) => acc + ite.precio,
            0
        );
        divTotal.textContent = `Total: ${totalCarrito}`;
    }

    localStorage.setItem("NftsAgregados", JSON.stringify(carrito));

}

//FUNCION ELIMINAR DEL CARRITO
const eliminarNftDelCarrito = (nft, e) => {
    let nftCard = e.target.closest("#nft-card");
    for (let c = 0; c < carrito.length; c++) {
        (carrito[c] === nft) &&
        carrito.splice(c, 1);
        localStorage.setItem("NftsAgregados", JSON.stringify(carrito))
        nftCard.remove();
        let totalCarrito = carrito.reduce(
            (acc, ite) => acc + ite.precio,
            0
        );

        divTotal.textContent = `Total: ${totalCarrito}`;

    }
    console.log(carrito);
    console.log(carrito.length);
};

//FUNCION VACIAR CARRITO
const vaciarCarrito = () => {
    botonVaciar.addEventListener('click', () => {
        carro.innerHTML = ""
        carrito.splice(0, carrito.length);
        divTotal.textContent = `Total: 0`;
        localStorage.setItem("NftsAgregados", "")
        console.log(carrito.length)
    })
}


mostrarModal();
registro();
buscador();
mostrarConSelect();
vaciarCarrito();
