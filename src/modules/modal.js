const modal = () => {
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const closeModalBtn = document.querySelector('.header-modal__close')
    const fancyBtns = document.querySelectorAll('.fancyboxModal')

    fancyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.hash === '#callback') {
                console.log('#callback');
                modal.style.display = 'block'
                overlay.style.display = 'block'
            } else if (btn.hash === '#application') {
                console.log('no application');
            }
        })
        
    })

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
        console.log('btnaction off');
    })
}
export default modal