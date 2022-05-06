const sliders = () => {
    const benefitItems = document.querySelectorAll('.benefits__item')
    const cards = document.querySelectorAll('.col-md-12.col-lg-6') 

    const style = '.not-active {display:none}'
    const styleCreate = document.createElement('style')
    styleCreate.innerText = style
    document.head.appendChild(styleCreate)

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
                    
            } else {
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
            }  
        })
    }

    checkForInnerWidth(benefitItems)
    checkForInnerWidth(cards)
    
    const classSwitcher = (item) => {
        item.forEach(item => {
            if (item.classList.contains('not-active')) {
                item.classList.remove('not-active')
            } else {
                item.classList.add('not-active')
            }
        })  
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.benefits__arrow--right')) {
            classSwitcher(benefitItems)
        }
        if (e.target.closest('.benefits__arrow--left')) {
            classSwitcher(benefitItems)
        }
        if (e.target.closest('.services__arrow--right')) {
            classSwitcher(cards)
        }
        if (e.target.closest('.services__arrow--left')) {
            classSwitcher(cards)
        }
    })
 
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    // benefitsContent.addEventListener('click', (e) => {
        
    //     if (window.innerWidth >= 576) {
    //         if (e.target.closest('.benefits__arrow--right')) {
    //             benefitItems.forEach(benefitItem => {
    //                 if (benefitItem.classList.contains('not-active')) {
    //                     benefitItem.classList.remove('not-active')
    //                 } else {
    //                     benefitItem.classList.add('not-active')
    //                 }
    //             })
    //         }
    //         if (e.target.closest('.benefits__arrow--left')) {
    //             benefitItems.forEach(benefitItem => {
    //                 if (benefitItem.classList.contains('not-active')) {
    //                     benefitItem.classList.remove('not-active')
    //                 } else {
    //                     benefitItem.classList.add('not-active')
    //                 }
    //             })
    //         }
    //     } else {
    //         prevSlide(benefitItems, currentSlide, 'not-active')

    //         if (e.target.closest('.benefits__arrow--right')) {
    //             currentSlide++
    //         } else if (e.target.closest('.benefits__arrow--left')) {
    //             currentSlide--          
    //         }
    //         if (currentSlide >= benefitItems.length) {
    //             currentSlide = 0
    //         }
    //         if (currentSlide < 0) {
    //             currentSlide = benefitItems.length - 1
    //         }
    
    //         nextSlide(benefitItems, currentSlide, 'not-active')
    //     }   
    // })
}

export default sliders