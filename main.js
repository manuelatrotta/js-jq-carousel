//obiettivo: far scorrere le immagini al click sulle freccette laterali e allo stesso tempo deve andare avanti il cerchio colorandosi.

//step 1 creiamo una funzione che con azione 'click' agisca sulle classi 'prev' e 'next'
$(document).ready(
  function() {
    $('.next').click(
      function() {
        clickNext();
      }
    );

$(document).ready(
  function() {
    $('.prev').click(
      function() {
        clickNext();
      }
    );
  }
);
