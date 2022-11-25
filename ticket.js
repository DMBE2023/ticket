const valorTicket = 200;

const descuentoEst = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;

function calTotal() {
  let cant = document.getElementById("cantidad").value;
  let categ = document.getElementById("categoria").value;

  let total = 0;
  if (categ == 1) {
    total = cant * valorTicket * 0.2;
  } else if (categ == 2) {
    total = cant * valorTicket * 0.5;
  } else {
    total = cant * valorTicket * 0.85;
  }

  document.getElementById("pagar").innerHTML = `Total a pagar :$${total}`;
}

function borrar() {
  document.getElementById("form").reset();
}

function ticket() {
  let mens = document.getElementById('pagar').innerHTML
  alert(`Gracias por su compra, ${mens}`)
  }