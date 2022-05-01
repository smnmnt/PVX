import calculatorCounter from './modules/calculatorCounter'
import formSender from './modules/formSender'
import modal from './modules/modal'
import sliderFirst from './modules/sliderFirst'
import sliderSecond from './modules/sliderSecond'
import timer from './modules/timer'
import toTop from './modules/toTop'


sliderFirst()
sliderSecond()
modal()
toTop()
timer('8 may 2022')
calculatorCounter()

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