$(document).ready(function () {
    $('.hero__slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
    });

    const mixer = mixitup('.works__card-list');
});

(() => { //А для чого потрібно, щоб оцей весь код одразу виконувався, не дивлячись на те, чи завантажили DOM елементи чи ні ?
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();









