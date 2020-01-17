//obiettivo: far scorrere le immagini al click sulle freccette laterali e allo stesso tempo deve andare avanti il cerchio colorandosi.

//step 1 creiamo una funzione che con azione 'click' agisca sulle classi 'prev' e 'next'
$(document) .ready(
  function() {
    $('.next').click(
      function() {
        clickNext();
      }
    );

    $('.prev').click(
      function() {
        clickPrev();
      }
    );
  }
);
// funzione con clickNext in cui si avrà lo scorrimento delle immagini
function clickNext() {
//  alert('click Next');
//creazione variabili per le immagini
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
//per i cerchietti
  var circleActive = $('i.active');
  var circleNext = circleActive.next();
  //per avere continuità è necessario dire che se l'imageActive è ultima allora si toglie la classe 'active' e viene aggiunta alla seguente.
  if (imageActive.hasClass('last') == true) {
    imageActive.removeClass('active');
    $('img.first').addClass('active');
  //altrimenti se è false imageActive aggiunge classe 'active' e imageNext la rimuove. Ciò permette ciclicità.
  }else {
    imageActive.removeClass('active');
    imageNext.addClass('active');
  }
}

//medesimo procedimento per clickPrev con condizione imageActive con class first. Si procede in senso opposto
function clickPrev() {
//  alert('click prev');
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  //per avere continuità è necessario dire che se l'imageActive è ultima allora si toglie la classe 'active' e viene aggiunta alla seguente.
  if (imageActive.hasClass('first') == true) {
    imageActive.removeClass('active');
    $('img.last').addClass('active');
  //altrimenti se è false imageActive aggiunge classe 'active' e imageNext la rimuove. Ciò permette ciclicità.
  }else {
    imageActive.removeClass('active');
    imagePrev.addClass('active');
  }
}
