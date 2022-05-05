const imageZoom = () => {
    const style = '.modal-img { z-index: 99; position: fixed; top: 2%; left: 33%; background: url(../images/documents/original/document4.jpg) center / cover; width: 654px; height: 900px; transition: 200ms;}'
    const styleCreate = document.createElement('style')
    styleCreate.innerText = style
    document.head.appendChild(styleCreate)

    const overlay = document.querySelector('.overlay')
    const body = document.querySelector('body')
    
    const imgs = document.querySelectorAll('.sertificate-document');
    const disableImgAttributes = document.querySelectorAll('.sertificate-document')
    
    const hoverEffectImgs = document.querySelectorAll('.img-responsive')
    
    hoverEffectImgs.forEach(hoverEffectImg => {
        hoverEffectImg.addEventListener('mouseover', () => {
            hoverEffectImg.style.transition = '0.2'
            hoverEffectImg.style.opacity = "0.5"
        })
        hoverEffectImg.addEventListener('mouseout', () => {
            hoverEffectImg.style.transition = '0.2'
            hoverEffectImg.style.opacity = "0"
        })
    })
    
    disableImgAttributes.forEach(disableImgAttributes => {
        disableImgAttributes.setAttribute('href', '')
    })
    
    const addModalDocument = () => {
        overlay.style.display = "block";
        const modalDiv = document.createElement('div')
        modalDiv.classList.add('modal-img')
        body.append(modalDiv)
        modalDiv.innerHTML = `
        <span title="Close" class="header-modal__close">x</span>
        `
        document.addEventListener('click', (e) => {
            if (e.target.closest('.overlay') || e.target.closest(".header-modal__close")) {
                modalDiv.remove()
                overlay.style.display = 'none'
            }

        })
    }
    
    imgs.forEach(imgDiv => {
        imgDiv.addEventListener('click', (e) => {
            e.preventDefault()            
            addModalDocument()
        })
    })    
}
    
export default imageZoom