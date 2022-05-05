const imageZoom = () => {
    const style = '.modal-img { z-index: 99; position: absolute; top: 2%; left: 33%; background: url(../images/documents/original/document4.jpg) center / cover; width: 654px; height: 900px;}'
    const styleCreate = document.createElement('style')
    styleCreate.innerText = style
    document.head.appendChild(styleCreate)

    const overlay = document.querySelector('.overlay')

    const imgs = document.querySelectorAll('.sertificate-document');
    const disableImgAttributes = document.querySelectorAll('.sertificate-document')
    const modalImg = document.querySelector(".sertificate-document > .img-responsive")
    const modalImgAttr = modalImg.getAttribute('src')

    const hoverEffectImgs = document.querySelectorAll('.document-overlay')

    hoverEffectImgs.forEach(hoverEffectImg => {
        hoverEffectImg.addEventListener('mouseover', () => {
            hoverEffectImg.style.transition = '.2s'
            hoverEffectImg.style.opacity = "1"
        })
        hoverEffectImg.addEventListener('mouseout', () => {
            hoverEffectImg.style.transition = '.2s'
            hoverEffectImg.style.opacity = "0"
        })
    }) 

    disableImgAttributes.forEach(disableImgAttributes => {
        disableImgAttributes.setAttribute('href', '')
    })
    
    imgs.forEach(imgDiv => {
        
        imgDiv.addEventListener('click', (e) => {
            e.preventDefault()            
            overlay.style.display = "block";
            const modalDiv = document.createElement('div')
            modalDiv.classList.add('modal-img')
            overlay.append(modalDiv)
            console.log(modalDiv);
        })
    })

}

export default imageZoom