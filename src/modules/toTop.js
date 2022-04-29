const toTop = () => {
    const smoothScrollBtn = document.querySelector('.smooth-scroll')

    smoothScrollBtn.addEventListener('click', topFunction)

    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
}
export default toTop