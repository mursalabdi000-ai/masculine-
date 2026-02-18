document.addEventListener("DOMContentLoaded", function(){

  const callBtn = document.getElementById("btnCall");
  const mailBtn = document.getElementById("btnMail");

  if(callBtn){
    callBtn.onclick = function(){
      window.location.href = "tel:015778697052";
    }
  }

  if(mailBtn){
    mailBtn.onclick = function(){
      window.location.href = "mailto:Kontakt.mass.bremen@hotmail.com";
    }
  }

});
