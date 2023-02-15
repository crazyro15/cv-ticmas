let abrir = document.querySelector(".abrir");
let cerrar = document.querySelector(".cerrar");
let btn = document.querySelector("#submit");
let nombre = document.querySelector("#name");
let correo = document.querySelector("#correo");
let msj = document.querySelector("#message");
let contactame = document.querySelector("#contactame");

  function abrirDatos(){
    ladoIzq.classList.add("ladoIzqOculto");
    ladoDer.style.paddingLeft = "350px";
  }

  function cerrarDatos(){
    ladoIzq.classList.remove("ladoIzqOculto");
    ladoDer.style.paddingLeft = "2em"
  };

  abrir.addEventListener("click", abrirDatos);
  cerrar.addEventListener("click", cerrarDatos);

  // function enviar(){
  //   if(nombre.value != "" && correo.value != "" && msj.value != ""){
  //   alert("Tu mensaje ha sido enviado!");
  //   location.href ="index.html";
  //   }else{
  //     alert("Debe completar todos los campos");
  //   }
  // }

  function enviar(){
    alert("Tu mensaje ha sido enviado!");
      location.href ="index.html";
  };

  btn.addEventListener("click", enviar);






