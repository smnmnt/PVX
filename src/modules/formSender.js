import formValidator from './formValidator'

const formSender = ({formId, someElem = [] }) => {
    const form = document.querySelector(formId)
    const statusBlock = document.createElement('div')

    const inputPhone = document.querySelectorAll('[name="phone"]')
    const inputName = document.querySelectorAll('[name="fio"]')

    const loadText = 'Идет загрузка. Подождите.'
    const errorText = 'Что-то пошло не так.'
    const successText = 'Успешно. С Вами свяжутся.'

    const validChecker = (formElements) => {
        let success = true
        formElements.forEach(inputName => {
            if (inputName === '') {
                success = false
            }
            if (inputName.getAttribute('name') == 'fio') {
                if (inputName.value.match(/[^а-яА-Я\^a-zA-Z\s]/g)) {
                    success = true
                }
            }
        })
        formElements.forEach(inputPhone => {
            if (inputPhone.value === '') {
                success = false
            }
            if (inputPhone.getAttribute('name') == 'phone') {
                if (inputPhone.value.match(/[^0-9\+]/g)) {
                    success = true
                }
            } 
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        

        if (validChecker(formElements)) {
            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = successText
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })

        } else {
            alert('Некорректное заполнение полей!')
            
            statusBlock.textContent = errorText
        }
        formElements.forEach(input => {
            input.value = ''
        })
    }
    formValidator()

    const logger = () => {
        const formData = new FormData(form)
        console.log(Array.from.formData);
        formData.forEach((a) => {
            console.log(a);
        })
    }
    try {
        if (!form) {
            throw new Error ('Проблемы с формой')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

export default formSender 