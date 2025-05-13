onload = function(){
  //showPopup();
  textPopup.innerHTML="Semoga suka yaa~";
}
 let nameInput = document.getElementById("nameInput");
let textPopup = document.getElementById("textPopup");
const items = document.querySelectorAll(".item");
function showPopup() {
      const blur = document.getElementById("blurBg");
      const popup = document.getElementById("popupBox");
      blur.style.display = "flex";
      setTimeout(() => popup.classList.add("show"), 10); // animasi muncul
      setTimeout(() => 
      closePopup(), 5000);
    }

    function closePopup() {
      const blur = document.getElementById("blurBg");
      const popup = document.getElementById("popupBox");
      popup.classList.remove("show");
      setTimeout(() => blur.style.display = "none", 300); // tunggu animasi hilang
    }
    let nolak = document.getElementById("nolak");
    let mau = document.getElementById("mau");
    //mau.disabled = true;
    //nolak.disabled = true;
    let dikanan = false;
    function tombolGeser() {
      if(!dikanan){
        nolak.style.marginLeft = "10px";
        mau.style.marginLeft = "-160px";
      }else{
        nolak.style.marginLeft = "-160px";
        mau.style.marginLeft = "10px";
      }
      dikanan = !dikanan;
    };
    nolak.addEventListener("click", tombolGeser);
function inputName(){
      let nama = nameInput.value;
      let currentIndex = 1;
      if(nama.trim() !== "" && currentIndex < items.length){
      nameInput.disabled = true;
      const target = items[currentIndex];
    target.scrollIntoView({ behavior: "smooth", inline: "center" });  // <-- Ini yang menggeser
    currentIndex++;
      let name = nameInput.value;
    let teks = `Happy Birthday ${name}!!, Hari ini adalah hari spesial untukmu. Semoga kamu selalu diberi kesehatan, umur panjang, dan kebahagiaan tanpa batas. Jangan pernah berhenti bermimpi dan tetap jadi versi terbaik dari dirimu!`;
    let teks2 = 'Maaf, aku nggak bisa ngasih apa-apa hari ini, cuma ucapan sederhana ini. Terima kasih sudah jadi teman yang selalu bisa diajak ngobrol, bercanda, atau diam bareng tanpa canggung. Aku harap semua hal baik datang ke kamu, satu per satu, tanpa perlu kamu minta.';
    let angka = 0;
    function typingEffect(){
      if (angka < teks.length) {
    document.getElementById("slide1").textContent += teks.charAt(angka);
    angka++;
    setTimeout(typingEffect, 60); // atur kecepatan ketik di sini
    if(angka >= teks.length){
      setTimeout(function(){
      let currentIndex = 2;
      const target = items[currentIndex];
    target.scrollIntoView({ behavior: "smooth", inline: "center" });  // <-- Ini yang menggeser
      currentIndex++;
      let angka1 = 0;
      
    function typingEffect2(){
      if(angka1 < teks2.length){
        document.getElementById("slide2").textContent += teks2.charAt(angka1);
        angka1++;
        setTimeout(typingEffect2, 60);
        if(angka1 >= teks2.length){
          document.getElementById("box5").style.visibility= "visible";
          let currentIndex = 3;
      const target = items[currentIndex];
    target.scrollIntoView({ behavior: "smooth", inline: "center" });  // <-- Ini yang menggeser
      currentIndex++;
        }
      }
    }
        setTimeout(typingEffect2, 1000);
      }, 500);
    }
  }
    }
      typingEffect();
      }else{
        showPopup();
        textPopup.innerHTML="Tolong diisi ya :3"
      }
    }
    let sudahDiklik = false;
    mau.addEventListener("click", () => {
      if(sudahDiklik) return;
      nolak.removeEventListener("click", tombolGeser);
      sudahDiklik = true;
      setTimeout(() => window.location.href="flower.html",1000);
     });