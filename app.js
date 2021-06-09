function toggleMenu() {
    var toggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    var main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main .classList.toggle('active');
}