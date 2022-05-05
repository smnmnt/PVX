const sliders = () => {
    const benefitItems = document.querySelectorAll('.benefits__item')
    const benefitsContent = document.querySelector('#benefits')
    const cards = document.querySelectorAll('.col-md-12.col-lg-6')
    const wraps = document.querySelector('.benefits-wrap') 
    const servicesArrows = document.querySelector('.services-arrows')

    const style = '.not-active {display:none}'
    const styleCreate = document.createElement('style')
    styleCreate.innerText = style
    document.head.appendChild(styleCreate)

    let currentSlide = 0

    wraps.style.justifyContent = 'center'

    
    const classMoverBenefitItems = () => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.benefits__arrow--right')) {
                classSwitcher(benefitItems)
            }
            if (e.target.closest('.benefits__arrow--left')) {
                classSwitcher(benefitItems)
            }
        })
    }
    const classMoverCards = () => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.services__arrow--right')) {
                classSwitcher(cards)
            }
            if (e.target.closest('.services__arrow--left')) {
                classSwitcher(cards)
            }
        })
    }

    if (window.innerWidth >= 576) {
        classMoverBenefitItems()
        classMoverCards()
    }
    const classSwitcher = (item) => {
        item.forEach(item => {
            if (item.classList.contains('not-active')) {
                item.classList.remove('not-active')
            } else {
                item.classList.add('not-active')
            }
        })  
    }
    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const checkForInnerWidth = (toIt) => {
        let toItArr = Array.from(toIt)
        toIt.forEach((item, i) => {
            if (window.innerWidth >= 576) {
                if (toItArr.length % 3 === 0){
                    if (i > 2) {
                        item.classList.add('not-active')
                    }
                } 
                if (toItArr.length % 4 === 0){
                    if (i >= 2) {
                        item.classList.add('not-active')
                    }
                }
                //проверка на четность\нечетность
                    
            } else if (i > 0) {
                item.classList.add('not-active')
            }
        })
        if (window.innerWidth < 576) {
            benefitsContent.addEventListener('click', (e) => {
                prevSlide(benefitItems, currentSlide, 'not-active')
                if (e.target.closest('.benefits__arrow--right')) {
                    currentSlide++
                } else if (e.target.closest('.benefits__arrow--left')) {
                    currentSlide--          
                }
                if (currentSlide >= benefitItems.length) {
                    currentSlide = 0
                }
                if (currentSlide < 0) {
                    currentSlide = benefitItems.length - 1
                }
                
                nextSlide(benefitItems, currentSlide, 'not-active')
            })
            servicesArrows.addEventListener('click', (e) => {
                prevSlide(cards, currentSlide, 'not-active')

                if (e.target.closest('.services__arrow--right')) {
                    currentSlide++
                } else if (e.target.closest('.services__arrow--left')) {
                    currentSlide--          
                }
                if (currentSlide >= cards.length) {
                    currentSlide = 0
                }
                if (currentSlide < 0) {
                    currentSlide = cards.length - 1
                }
        
                nextSlide(cards, currentSlide, 'not-active')
            }) 
        }
    }

    checkForInnerWidth(benefitItems)
    checkForInnerWidth(cards)
}

export default sliders