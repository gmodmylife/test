function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    })
}

let button = document.querySelector('.button_down')

button.addEventListener('click', scrollDown)