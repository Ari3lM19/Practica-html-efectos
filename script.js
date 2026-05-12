/* ===================================== */
/* ELEMENTOS */
/* ===================================== */

const themeBtn = document.getElementById("theme-btn");

const body = document.body;

/* ===================================== */
/* CAMBIO DE TEMA */
/* ===================================== */

themeBtn.addEventListener("click", function(){

    /* Activa o desactiva dark mode */
    body.classList.toggle("dark");

    /* Cambiar icono */
    if(body.classList.contains("dark")){

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }else{

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});