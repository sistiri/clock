// Mutassa az órát, percet, másodpercet
// Az óra a user által használt időzóna szerint jelenítse meg az időt
// Az óra 24 órás formátumot használjon minden esetben
// A színeket szabadon választhatod meg
// Az óra a képernyő közepén jelenjen meg, azaz mind vertikálisan, mind horizontálisan legyen középre igazítva minden nézetben
// A háttérszín pontosan 1 képernyő széles és magas legyen minden nézetben
// Használd a Cyberverse betűtípust
// A betűméretet te választhatod meg

'use strict';

setInterval(function showTime() {
    const dateNow = new Date()
    const timeNow = dateNow.toLocaleTimeString('hu');
    document.querySelector('.clock').textContent = null;
    document.querySelector('.clock').insertAdjacentHTML('beforeend', timeNow);
}, 1000);




