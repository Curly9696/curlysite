const modal  = document.getElementById("modal");
const btn = document.getElementById("btn");
const butt1 = document.getElementById("butt1");
const butt2 = document.getElementById("butt2");

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

function openModal(){
    modal.style.display = "flex";


}

function closeModal(){
    modal.style.display = "none";
}
butt1.onclick = openModal;

window.onclick = function (e) {
    if (e.target === modal){
        closeModal();
    }
};

function openModal(){
    modal.style.display = "flex";


}

function closeModal(){
    modal.style.display = "none";
}
butt2.onclick = openModal;

window.onclick = function (e) {
    if (e.target === modal){
        closeModal();
    }
};