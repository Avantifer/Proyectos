function modal(){
    const modal = document.getElementById('modal-container');
    const display = window.getComputedStyle(modal).getPropertyValue('display');

    (display === "none") ? modal.style.display = "grid" : modal.style.display = "none";
}