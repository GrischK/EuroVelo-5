let bouton = document.getElementById("hamburger");

bouton.onclick = function() {
  let menu = document.getElementById("menu");
  
  if (bouton.classList.contains("inactive")){ // Si le contenu est le hamburger :
    bouton.innerHTML = "&#x2715;";
    bouton.classList.add("active");
    bouton.classList.remove("inactive");
    menu.classList.add("menu_active");
  }
  else{
    bouton.innerHTML = "&#9776;";
    bouton.classList.add("inactive");
    bouton.classList.remove("active");
    menu.classList.remove("menu_active");
  }
}