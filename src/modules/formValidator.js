const formValidator = (formElements) => {
    let success = true
        formElements.forEach(input => {
           if (input.name == 'fio') {
                if (input.value === '') {
                    success = false
                } else if (input.value.match(/[^а-яА-Я\^a-zA-Z\s]/g)) {
                    success = true
                }
            } else if (input.name == 'phone') {
                if (input.value === '') {
                    success = false
                } else if (input.value.match(/[^0-9\(\)\+\-]/g)) {
                    success = true
                }
            } 
        })
        return success
    }
export default formValidator