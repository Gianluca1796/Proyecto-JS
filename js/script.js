class Nft {
    constructor(coleccion, nombre, descripcion, precio, divisa, ) {
        this.coleccion = coleccion
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.divisa = divisa;
    }
}

const ape1 = new Nft("bored ape", "undead ape", "The Earth in 2136 is a very different place. The greed of humanity has plagued the world for decades. Environmental neglect has resulted in the mass destruction of habitats and diseases thrive in every major city. But the digital world isn’t immune, either. With wars raging in the real world, the digital world is abandoned.", 99.00, "ETH")
const ape2 = new Nft("bored ape", "mutant ape", "The MUTANT APE  is a Mutant Ape that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.", 169, 69, "DAI")
const ape3 = new Nft("bored ape", "king ape", "The KING APE  is an Ape that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.", 240, "ETH")
const punk1 = new Nft("cryptopunk #66", "cryptopunks", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 6, "BUSD")
const punk2 = new Nft("cryptopunk #33", "cryptopunks", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 0.025, "ETH")
const punk3 = new Nft("cryptopunk #70", "cryptopunks", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 3.75, "BUSD")
const alliepunk1 = new Nft("alliepunk #60", "cryptoalliens", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 7, "BUSD")
const alliepunk2 = new Nft("alliepunk #48", "cryptoalliens", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 2.34, "ETH")
const alliepunk3 = new Nft("alliepunk #103", "cryptoalliens", "This NFTs series is dedicated to the characters of the famous Cryptopunk series. Take one of the characters to your collection.", 120, "DAI")

let nfts = [ape1, ape2, ape3, punk1, punk2, punk3, alliepunk1, alliepunk2, alliepunk3]


let inputTexto = document.getElementById('inputTexto');

let divNft = document.getElementById('divNfts');

inputTexto.addEventListener('change', () => {
    let buscador = inputTexto.value
    let nftFiltrados = nfts.filter(nft => nft.nombre.includes(buscador.toLowerCase()))

    nftFiltrados.forEach(nft => {
        divNft.innerHTML += `
        <div>
            <h2>Nombre: ${nft.nombre}</h2>
            <p>Colección: ${nft.coleccion}</p>
            <p>Descripcion: ${nft.descripcion}</p>
            <p>Precio: ${nft.precio}</p>
            <p>divisa: ${nft.divisa}</p>
        </div>`
    })
})
