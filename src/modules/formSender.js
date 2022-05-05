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
                    success = false
                }
            }
        })
        formElements.forEach(inputPhone => {
            if (inputPhone.value === '') {
                success = false
            }
            if (inputPhone.getAttribute('name') == 'phone') {
                if (inputPhone.value.match(/[^0-9\(\)\+\-]/g)) {
                    success = false
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

        
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (document.querySelector('body').classList.contains('balkony')) {
                if(element == null) {
                    console.log('Верните блок!');
                } else {
                    if (elem.type === 'block') {
                        formBody[elem.id] = element.value
                    }
                }
            }
            
        })

        if (formValidator(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                    setTimeout(() => {
                        statusBlock.remove()
                    }, 2000)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
            
        } else {
            alert('Поля заполнены неверно!')
            statusBlock.textContent = errorText
        }
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