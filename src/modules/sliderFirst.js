const sliderFirst = () => {
    const benefitItems = document.querySelectorAll('.benefits__item')
    const benefitArrows = document.querySelectorAll('benefits__arrow')

    const style = '.not-active {display:none}'
    const styleCreate = document.createElement('style')
    styleCreate.innerText = style
    document.head.appendChild(styleCreate)

    const checkForInnerWidth = () => {
            benefitItems.forEach((benefitItem, i) => {
                if (window.innerWidth >= 576) {
                    if (i > 2) {
                        benefitItem.classList.add('not-active')
                    }
                } else {
                    if (i > 0) {
                        benefitItem.classList.add('not-active')
                    }
                }   
            })
    }

    checkForInnerWidth()
    
    const classSwitcher = () => {
        benefitItems.forEach(benefitItem => {
            if (benefitItem.classList.contains('not-active')) {
                benefitItem.classList.remove('not-active')
            } else {
                benefitItem.classList.add('not-active')
            }
        })
        
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.benefits__arrow--right')) {
            classSwitcher()
        }
        if (e.target.closest('.benefits__arrow--left')) {
            classSwitcher()
        }
    })
}

export default sliderFirst