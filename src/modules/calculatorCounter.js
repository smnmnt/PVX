import { animate } from './helpers'

const calculatorCounter = () => {
    const calcType = document.getElementById('calc-type')
    const calcMaterial = document.getElementById('calc-type-material')
    const calcSquare = document.getElementById('calc-input')
    const total = document.getElementById('calc-total')

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0

        calcType.options[0].value = '0'
        calcMaterial.options[0].value = '0'
        
        if (calcType.value && calcSquare.value && calcMaterial.value){
            totalValue = calcSquareValue * calcTypeValue * calcMaterialValue

            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    total.placeholder = Math.round(totalValue * progress)
                }
              });
        } 
        else{
            totalValue = 0
        }
    }

    document.addEventListener('change', (e) => {
        if ( e.target === calcSquare ||
            e.target === calcType || e.target === calcMaterial){

                countCalc()
        }
    })
    // console.log(calcTypeValue)
    // console.log(calcMaterialValue);
    // console.log(calcSquareValue);
    // console.log(totalValue);
}
export default calculatorCounter