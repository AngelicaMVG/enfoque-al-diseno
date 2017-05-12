var menu = document.getElementById('navegador');
var botonMenu = document.getElementById('btn-menu');

function mostrarMenu() {
  if (menu.style.display == "block") {
    menu.style.display = "none";
    
  } else {
    menu.style.display = "block";

  }
}

botonMenu.addEventListener('click', mostrarMenu);
