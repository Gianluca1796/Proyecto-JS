//CREE EL CARRITO VACIO
let carrito = []

//CREE LOS OBJETOS CORRESPONDIENTES A LAS NFT QUE TIENE LA TIENDA
class Nft {
    constructor(id, coleccion, nombre, descripcion, precio, divisa, ) {
        this.id = id
        this.coleccion = coleccion
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.divisa = divisa;
    }
}

const ape1 = new Nft(1, "BORED APE", "Undead ape", "The Earth in 2136 is a very different place. The greed of humanity has plagued the world for decades. Environmental neglect has resulted in the mass destruction of habitats and diseases thrive in every major city. But the digital world isn’t immune, either. With wars raging in the real world, the digital world is abandoned.", 99.00, "ETH")
const ape2 = new Nft(2, "BORED APE", "Mutant ape", "The MUTANT APE  is a Mutant Ape that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.", 169, 69, "DAI")
const ape3 = new Nft(3, "BORED APE", "King ape", "The KING APE  is an Ape that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.", 240, "ETH")
const punk1 = new Nft(4, "CRYPTOPUNKS", "Cryptopunk #66", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 6, "BUSD")
const punk2 = new Nft(5, "CRYPTOPUNKS", "Cryptopunk #33", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 0.025, "ETH")
const punk3 = new Nft(6, "CRYPTOPUNKS", "Cryptopunk #70", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 3.75, "BUSD")
const alliepunk1 = new Nft(7, "CRYPTOALLIENS", "Alliepunk #60", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 7, "BUSD")
const alliepunk2 = new Nft(8, "CRYPTOALLIENS", "Alliepunk #48", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 2.34, "ETH")
const alliepunk3 = new Nft(9, "CRYPTOALLIENS", "Alliepunk #103", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 120, "DAI")

//CREE EL ARRAY QUE CONTIENE TODOS LOS NFTS
let nfts = [ape1, ape2, ape3, punk1, punk2, punk3, alliepunk1, alliepunk2, alliepunk3]

// CREE LA FUNCIÓN PARA UTILIZAR EL BUSCADOR
const buscador = () => {
    let inputTexto = document.getElementById('inputTexto');
    inputTexto.addEventListener('change', () => {
        let buscador = inputTexto.value
        let nftFiltrados = nfts.filter(nft => nft.coleccion.includes(buscador.toUpperCase()))
        let divNft = document.getElementById('divNfts');
        nftFiltrados.forEach(nft => {
            divNft.innerHTML += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${nft.nombre}</h5>
            <p class="card-text">${nft.coleccion}</p>
            <p class="card-text">${nft.descripcion}</p>
            <p class="card-text">${nft.precio}</p>
            <p class="card-text">${nft.divisa}</p>
            <button id="boton${nft.id}" class=" btn btn-primary"> Agregar al  carrito</button>
            </div>
            </div>
            `
        })
        nftFiltrados.forEach(nft => {
            (document.getElementById(`boton${nft.id}`)).addEventListener('click', () => {
                carrito.push(nft)
                console.log(carrito)
                localStorage.setItem("NftsAgregados", JSON.stringify(carrito))
            })
        })
    })
}

buscador();

