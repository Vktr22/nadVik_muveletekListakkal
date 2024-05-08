# Plüssmackó webáruház

példa:
https://mindenamipluss.hu/?mindenamipluss_hu&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBlesnctTjlJsKCUpPzTFwORqKbpPGykr-NEwSG9G6wWyxxOogZQoSPSwaAm6SEALw_wcB

## Specifikáció

Készíts "webáruházat" tetszőleges témában. -> Téma: Plüssmackó webáruház

Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

Az adatokat jelenítsd meg egy táblázatban!
A formázáshoz bootstrap-et használj! A design eltérhet a képen látottól!
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!
++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 
++++ A táblázat minden sora mellett legyen egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!

### PUBLIKUS FELÜLET

1. A publikus felületen div-ekben jelenítsük meg az adatokat. Az előzetes minta alapján! Figyelj a reszponzitvitásra!
2. Reszponzív oldal
3. Az oldalon legyen szűrési lehetőség, pl.:keresés névben, leírásban, szűrés kategőria szerint, bizonyos árnál olcsóbb, v drágább termékek
4. rendezési lehetőség, pl. ár szerint növekvő, csökkenő
5. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosarat táblázatos formában jelenítsd meg.
6. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Rendelés összeállítása pdf-formátumban.
8. ++ Egyetlen termék megjelenítése: Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
9. ++ A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## file-ok
- index.html -> a publikus oldal drótváza, hívja a style.css-t, valamint main.js-t.
- style.css -> css + bootstrap, az oldal kinézete/stílusa
- main.js -> hívja a többi .js-file-t.
- adatLista.js -> Tárolja az objektum listákat: termekLista, kosarLista
- fuggvenyek.js -> tárolja a függvényeket


## Alkalmazott függvények
### publikus felület
- **divOsszeallit(termekLista) -> txt** -> összeállítja a kis kártyákat
- **megjelenit(txt,elem) -> nincs** -> megjeleníti a txt-t egy html elemben
- **kosarba (termekLista) -> kosarLista[]** -> amikor megnyomja a termékeknél a kicsi kosár gombot, beteszi a terméket a kosár listába
- **tablazatOsszeallit (kosarLista) -> txt** -> ha rányom a kosár tartalmára fent, akk betölti a kosarTartalma.html-t, ------ ne külön html-ben, oldal sávban!!!-------ahol táblázat formájában látja a vevő, a sor végén lesz egy kis kuka, amivel lehet a sort törölni
///////////////- **megjelenit (txt) -> nincs** -> megjeleniti a txt-t egy html elemben
- **kosarTorol(kosarLista) -> üres kosarLista[]** -> a //kosarTartalma.html-en/// - az oldalsávon lesz egy nagy kuka, ahol az összes terméket lehet törölni a kosárból. Eltűnik a táblázat, előjön egy ilyen szöveg, hogy "nincs termék a kosárban"
MOST EZ NEM KELL(- megrendeles(kosarLista, megrendelte(bool)) )
- 3.pont->**kereses(termekLista) -> termekLista[i]** -> keresési lehetőség a publikus felületen, a termékek nevei/jellemzői alapján, vagyis az oldal betölti azt/azokat a termékeket, amelyek-ben (in object) szerepel az a kifejezés/szó.
    ????? az oldal minden leütött karakternél frissüljön, vagy csak akkor, ha rányomunk a keresés gombr? ill. legördülőben hozza fel inkább közben a találatokat, és minden betű leütéssel frissüljön, aztán rákattintva töltse be az oldal?
//////////////- 4.pont->**termekekRendez(novekvoArszerintList[], csokkenoArszerintList[]) ->**
- **segedRendezNovekvo(termekLista) -> novekvoArszerintList[]** -> ár szerint növekvő sorrendbe rakja a termékeket
- **segedRendezCsokkeno(termekLista) -> csokkenoArszerintList[]** -> ár szerint csökkenő sorrendbe rakja a termékeket

### admin felulet
---ADMINT MOST HAGYJUK
- **megrendelt**