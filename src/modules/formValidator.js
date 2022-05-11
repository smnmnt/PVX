const formValidator = () => {
    const formName = document.querySelectorAll('[name="fio"]')
    const formTelephone = document.querySelectorAll('[name="phone"]')

    formName.forEach(formName =>
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\^a-zA-z@\-\s]/g, "") 
    }))

    formTelephone.forEach(formTelephone =>
        formTelephone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\+]/g, "")
        })
    )
}
    
export default formValidator 