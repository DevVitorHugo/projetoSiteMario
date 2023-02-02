const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechar = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");//define a variavel modal
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
})



botaoFechar.addEventListener("click", () =>{
    modal.classList.remove("aberto");
    video.setAttribute("src","");
    
});



 