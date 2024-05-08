import { termekLista } from "./adatLista.js";

//divOsszeallit(termekLista) -> txt** -> összeállítja a kis kártyákat

function divOsszeallit(termekLista){

    let kartya = ""
    for (let i = 0; i < termekLista.length; i++){
        const Tetel = termekLista[i]
        kartya = `
        <div class="col">
            <div class="card-header text-success"><strong>${Tetel.nev}</strong></div>
            <div class="card-body">
                <img src="${Tetel.kep}" class="img-thumbnail kepek" alt="">
                <br> ${Tetel.meret}
            </div>
            <div class="card-footer row">
                <span class="col-lg-8"${Tetel.ar}</span>
                <button type="button" class="btn btn-info btn-sm kosar">kosárba rak</button>
            </div>
        </div>`
    }
    return kartya

}