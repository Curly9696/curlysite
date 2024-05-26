const modal  = document.getElementById("modal");
const btn = document.getElementById("btn");
const butt1 = document.getElementById("butt1")

function openModal(){
    modal.style.display = "flex";


}

function closeModal(){
    modal.style.display = "none";
}
btn.onclick = openModal;

window.onclick = function (e) {
    if (e.target === modal){
        closeModal();
    }
};