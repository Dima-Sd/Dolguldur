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

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    })

    const header = document.querySelector('[data-header]');
    window = window.addEventListener('scroll', function () {
        header.classList.add('active')
        let scrollPosition = this.scrollY
        if (scrollPosition > 0) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    });

    const body = document.body;
    const buttonMenu = document.querySelector('[data-menu-button]')
    const buttonModalOpen = document.querySelector('[data-modal-open]')
    const buttonModalClose = document.querySelector('[data-modal-close]')

    buttonMenu.addEventListener('click', function () {
        body.classList.toggle('no-scroll')
    })

    buttonModalOpen.addEventListener('click', function () {
        body.classList.add('no-scroll')
    })

    buttonModalClose.addEventListener('click', function () {
        body.classList.remove('no-scroll')
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









