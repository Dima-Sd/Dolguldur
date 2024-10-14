$(document).ready(function () {
    $('.hero__slider').slick({
        arrows: false,
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 1500,
        infinite: true,
    });
    const mixer = mixitup('.works__card-list');
});

(() => { //А для чого потрібно, щоб оцей весь код одразу виконувався, не дивлячись на те, чи завантажили DOM елементи чи ні ?
    const menuBtnRef = document.querySelectorAll("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.forEach(function (item) {
        item.addEventListener("click", () => {
            const expanded =
                item.getAttribute("aria-expanded") === "true" || false;
            item.classList.toggle("is-open");
            item.setAttribute("aria-expanded", !expanded);
            mobileMenuRef.classList.toggle("is-open");
        });
    })

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









