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

    // const formName = document.querySelectorAll('[placeholder="ваше имя"]')
    // const formTelephone = document.querySelectorAll('[placeholder="ваш телефон"]')
    // const formNameModal = document.querySelectorAll('[placeholder="ваше имя*"]')
    // const formTelephoneModal = document.querySelectorAll('[placeholder="Контактный телефон*"]')

    // console.log(formNameModal);
    // console.log(formTelephoneModal);

    // formName.forEach(formName =>
    //     formName.addEventListener('input', (e) => {
    //         e.target.value = e.target.value.replace(/[^а-яА-Я\^a-zA-z@\-\s]/g, "") 
    // }))

    // formTelephone.forEach(formTelephone =>
    //     formTelephone.addEventListener('input', (e) => {
    //         e.target.value = e.target.value.replace(/[^0-9\(\)\+]/g, "")

            // e.target.value = e.value.slice(0, 16)

            // let telephoneLength = formTelephone.value.length
              
            // if (telephoneLength == 2) {
            //     formTelephone.value = formTelephone.value + "("
            // }
            // if (telephoneLength == 6) {
            //    formTelephone.value = formTelephone.value + ")-"
            // }
            // if (telephoneLength == 11) {
            //    formTelephone.value = formTelephone.value + "-" 
            // }
            // if (telephoneLength == 14) {
            //    formTelephone.value = formTelephone.value + "-"
            // } 
    //     })
    // )
}

export default formValidator