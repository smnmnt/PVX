import calculatorCounter from './modules/calculatorCounter'
import formSender from './modules/formSender'
import imageZoom from './modules/imageZoom'
import modal from './modules/modal'
import sliders from './modules/sliders'
import timer from './modules/timer'
import toTop from './modules/toTop'


sliders()
modal()
toTop()
timer('8 may 2022')
calculatorCounter()
imageZoom()
formSender({
    formId: '[name = "action-form"]', 
    someElem: [
        {
            type: 'block',
        }
    ] 
})
formSender({
    formId: '[name = "action-form2"]', 
    someElem: [
        {
            type: 'block',
        }
    ] 
})