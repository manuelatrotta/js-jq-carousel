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
  alert('click Next');
}
