import { termekLista } from "./adatLista.js";

//divOsszeallit(termekLista) -> txt** -> összeállítja a kis kártyákat

function divOsszeallit(termekLista){
                /* <div class="card col-lg-4">
                    <div class="card-header text-success"><strong>Túléltéltem még egy meetinget</strong></div>
                    <div class="card-body">
                        <img src="kepek/polo2.jpg" class="img-thumbnail" alt="">
                        <button type="button" class="btn btn-secondary">S</button>
                        <button type="button" class="btn btn-secondary">M</button>
                        <button type="button" class="btn btn-secondary">L</button>
                        <button type="button" class="btn btn-secondary">XL</button>
                        <button type="button" class="btn btn-secondary">XXL</button>
                        <br> feugiat mauris sit amet orci hendrerit, vitae luctus odio iaculis. In volutpat turpis sit amet tellus ullamcorper luctus.
                    </div>
                    <div class="card-footer row">
                        <span class="col-lg-8">Ár: 6990 Ft</span>
                        <button type="button" class="btn btn-success col-lg-4">Kosárba</button>
                    </div>
                </div> */
    let kartya = ""
    for (let i = 0; i < termekLista.length; i++){
        const Tetel = termekLista[i]
        kartya = `<div class="col">
        <div class="card-header text-success"><strong>${Tetel.nev}</strong></div>
        <div class="card-body">
            <img src="${Tetel.kep}" class="img-thumbnail kepek" alt="">
            <button type="button" class="btn btn-info btn-sm kosar">kosárba rak</button>
            <button type="button" class="btn btn-secondary">M</button>
            <button type="button" class="btn btn-secondary">L</button>
            <button type="button" class="btn btn-secondary">XL</button>
            <button type="button" class="btn btn-secondary">XXL</button>
            <br> feugiat mauris sit amet orci hendrerit, vitae luctus odio iaculis. In volutpat turpis sit amet tellus ullamcorper luctus.
        </div>
        <div class="card-footer row">
            <span class="col-lg-8">Ár: 6990 Ft</span>
            <button type="button" class="btn btn-success col-lg-4">Kosárba</button>
        </div>
    </div>`
    }
}