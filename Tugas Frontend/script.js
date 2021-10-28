arrayGambarFilm = document.querySelectorAll(".film img");

for(let i=0; i<arrayGambarFilm.length; i++){
    arrayGambarFilm[i].addEventListener("mouseover",function(){
        ambilIdFilm = arrayGambarFilm[i].parentNode.getAttribute('id');
        document.querySelector("#"+ambilIdFilm).classList.add("geser");
        document.querySelector("#"+ambilIdFilm+" img").classList.add("zoom");
        document.querySelector("#"+ambilIdFilm+" ul").style.zIndex = "2";
        document.querySelector("#"+ambilIdFilm+" img").style.zIndex = "3";
    })
    arrayGambarFilm[i].addEventListener("mouseout",function(){
        ambilIdFilm = arrayGambarFilm[i].parentNode.getAttribute('id');
        document.querySelector("#"+ambilIdFilm).classList.remove("geser");
        document.querySelector("#"+ambilIdFilm+" img").classList.remove("zoom");
        document.querySelector("#"+ambilIdFilm+" ul").style.zIndex = "0";
        document.querySelector("#"+ambilIdFilm+" img").style.zIndex = "1";
    })
}

document.querySelector(".tombol").addEventListener("click",function(){
    cariFilm = document.querySelector("input.search").value;
    bagianKanan = document.querySelector(".kanan");

    for(let i=0; i<arrayGambarFilm.length; i++){
        idFilm = arrayGambarFilm[i].parentNode.getAttribute("id");
        namaFilm = document.querySelector("#"+idFilm+" li:first-child").innerHTML;
        if(cariFilm==namaFilm){
            getFilm = document.querySelector("#"+idFilm);
            bagianKanan.innerHTML = "";
            bagianKanan.appendChild(getFilm);
        }
    }
})

arrayH4Film = document.getElementsByTagName("h4");

for(let i=0; i<arrayGambarFilm.length; i++){
    arrayGambarFilm[i].addEventListener("click",function(){
        idFilm = arrayGambarFilm[i].parentNode.getAttribute("id");
        namaFilm = document.querySelector("#"+idFilm+" li:first-child").innerHTML;
        for(let j=0; j<arrayH4Film.length; j++){
            if(namaFilm==arrayH4Film[j].innerHTML){
                parentH4 = arrayH4Film[j].parentNode;
                parentH4.classList.add("muncul");
            }
        }
    })
}

arrayCloseFilm = document.querySelectorAll(".close");

for(let i=0; i<arrayCloseFilm.length; i++){
    arrayCloseFilm[i].addEventListener("click",function(){
        parentCLose = arrayCloseFilm[i].parentNode;
        parentH4.classList.remove("muncul");
    })
}

hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click",function(){
    kiri = document.querySelector(".kiri");
    kiri.classList.toggle("geserKiri");
    hamburger.classList.toggle("geserKiri");
})