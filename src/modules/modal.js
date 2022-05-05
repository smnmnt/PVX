const modal = () => {
    const headerModal = document.querySelector('.header-modal')
    const serviceModal = document.querySelector('.services-modal')

    const overlay = document.querySelector('.overlay')

    const closeBtns = document.querySelectorAll('[title="Close"]')
    const fancyBtns = document.querySelectorAll('.fancyboxModal')

    // console.log(closeBtns);

    fancyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.hash === '#callback') {
                // console.log('#callback');
                headerModal.style.display = 'block'
                overlay.style.display = 'block'
            } else if (btn.hash === '#application') {
                // console.log('no application');
                serviceModal.style.display = 'block'
                overlay.style.display = 'block'
                
            }
        })
    })

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            headerModal.style.display = 'none'
            overlay.style.display = 'none'
            serviceModal.style.display = 'none'
        })
    })
}
export default modal