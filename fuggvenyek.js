
//divOsszeallit(termekLista) -> txt** -> összeállítja a kis kártyákat

export function divOsszeallit(termekLista){

    let kartya = ""
    for (let i = 0; i < termekLista.length; i++){
        const TETEL = termekLista[i]
        kartya += `
        <div class="col">
            <div class="card-header text-success"><strong>${TETEL.nev}</strong></div>
            <div class="card-body">
                <img src="${TETEL.kep}" class="img-thumbnail kepek" alt="">
                <br> ${TETEL.meret}
            </div>
            <div class="card-footer row">
                <span class="col-lg-8"${TETEL.arSzam.toLocaleString("hu-HU", {style:"currency", currency:"HUF"})}</span>
                <button type="button" class="btn btn-info btn-sm kosar">kosárba rak</button>
            </div>
        </div>`
    }
    return kartya
}

export function megjelenit(kartya){
    console.log(kartya)
    const ELEM = $("#szureshezTer")
    console.log(ELEM)
    ELEM.html(kartya)
}