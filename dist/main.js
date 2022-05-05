/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calculatorCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculatorCounter */ \"./src/modules/calculatorCounter.js\");\n/* harmony import */ var _modules_formSender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formSender */ \"./src/modules/formSender.js\");\n/* harmony import */ var _modules_imageZoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/imageZoom */ \"./src/modules/imageZoom.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliders */ \"./src/modules/sliders.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_toTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/toTop */ \"./src/modules/toTop.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_toTop__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('8 may 2022')\n;(0,_modules_calculatorCounter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_imageZoom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_formSender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    formId: '[name = \"action-form\"]', \n    someElem: [\n        {\n            type: 'block',\n        }\n    ] \n})\n;(0,_modules_formSender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    formId: '[name = \"action-form2\"]', \n    someElem: [\n        {\n            type: 'block',\n        }\n    ] \n})\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculatorCounter.js":
/*!******************************************!*\
  !*** ./src/modules/calculatorCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n/* harmony import */ var _calculatorValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatorValidator */ \"./src/modules/calculatorValidator.js\");\n\n\nconst calculatorCounter = () => {\n    const calcSection = document.getElementById('calc')\n    const calcType = document.getElementById('calc-type')\n    const calcMaterial = document.getElementById('calc-type-material')\n    const calcSquare = document.getElementById('calc-input')\n    const total = document.getElementById('calc-total')\n    if (calcSection != null) {\n        const countCalc = () => {\n            const calcTypeValue = +calcType.options[calcType.selectedIndex].value\n            const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value\n            const calcSquareValue = calcSquare.value\n\n            let totalValue = 0\n\n            calcType.options[0].value = '0'\n            calcMaterial.options[0].value = '0'\n\n            if (calcType.value && calcSquare.value && calcMaterial.value){\n                totalValue = calcSquareValue * calcTypeValue * calcMaterialValue\n\n                ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 1000,\n                    timing(timeFraction) {\n                      return timeFraction;\n                    },\n                    draw(progress) {\n                        total.placeholder = Math.round(totalValue * progress)\n                    }\n                  });\n            } \n            else{\n                totalValue = 0\n            }\n        }\n\n        calcSection.addEventListener('change', (e) => {\n            if ( e.target === calcSquare ||\n                e.target === calcType || e.target === calcMaterial){\n                    countCalc()\n            }\n        })\n        ;(0,_calculatorValidator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculatorCounter);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculatorCounter.js?");

/***/ }),

/***/ "./src/modules/calculatorValidator.js":
/*!********************************************!*\
  !*** ./src/modules/calculatorValidator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculatorValidator = () => {\n    const calcSquare = document.getElementById('calc-input')\n\n    const numberEnable = (e) => {\n        e.target.value = e.target.value.replace(/\\D+/, \"\")  \n    }\n    calcSquare.addEventListener('input', numberEnable)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculatorValidator);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculatorValidator.js?");

/***/ }),

/***/ "./src/modules/formSender.js":
/*!***********************************!*\
  !*** ./src/modules/formSender.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidator */ \"./src/modules/formValidator.js\");\n\n\nconst formSender = ({formId, someElem = [] }) => {\n    const form = document.querySelector(formId)\n    const statusBlock = document.createElement('div')\n\n    const inputPhone = document.querySelectorAll('[name=\"phone\"]')\n    const inputName = document.querySelectorAll('[name=\"fio\"]')\n\n    const loadText = 'Идет загрузка. Подождите.'\n    const errorText = 'Что-то пошло не так.'\n    const successText = 'Успешно. С Вами свяжутся.'\n\n    const validChecker = (formElements) => {\n        let success = true\n        formElements.forEach(inputName => {\n            if (inputName === '') {\n                success = false\n            }\n            if (inputName.getAttribute('name') == 'fio') {\n                if (inputName.value.match(/[^а-яА-Я\\^a-zA-Z\\s]/g)) {\n                    success = false\n                }\n            }\n        })\n        formElements.forEach(inputPhone => {\n            if (inputPhone.value === '') {\n                success = false\n            }\n            if (inputPhone.getAttribute('name') == 'phone') {\n                if (inputPhone.value.match(/[^0-9\\(\\)\\+\\-]/g)) {\n                    success = false\n                }\n            } \n        })\n\n        return success\n    }\n\n    const sendData = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(res => res.json())\n    }\n\n    const submitForm = () => {\n        const formElements = form.querySelectorAll('input')\n        const formData = new FormData(form)\n        const formBody = {}\n\n        statusBlock.textContent = loadText\n        form.append(statusBlock)\n\n        formData.forEach((val, key) => {\n            formBody[key] = val\n        })\n\n        if (validChecker(formElements)) {\n            sendData(formBody)\n                .then(data => {\n                    statusBlock.textContent = successText\n\n                    formElements.forEach(input => {\n                        input.value = ''\n                    })\n                })\n                .catch(error => {\n                    statusBlock.textContent = errorText\n                })\n\n        } else {\n            alert('Некорректное заполнение полей!')\n            statusBlock.textContent = errorText\n        }\n    }\n    ;(0,_formValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    try {\n        if (!form) {\n            throw new Error ('Проблемы с формой')\n        }\n\n        form.addEventListener('submit', (event) => {\n            event.preventDefault()\n\n            submitForm()\n        })\n    } catch (error) {\n        console.log(error.message);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formSender); \n\n//# sourceURL=webpack://middle_diplom/./src/modules/formSender.js?");

/***/ }),

/***/ "./src/modules/formValidator.js":
/*!**************************************!*\
  !*** ./src/modules/formValidator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidator = () => {\n    const formName = document.querySelectorAll('[placeholder=\"ваше имя\"]')\n    const formTelephone = document.querySelectorAll('[placeholder=\"ваш телефон\"]')\n\n    formName.forEach(formName =>\n        formName.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\^a-zA-z@\\-\\s]/g, \"\") \n    }))\n\n    formTelephone.forEach(formTelephone =>\n        formTelephone.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\+]/g, \"\")\n        })\n    )\n}\n    \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidator); \n\n//# sourceURL=webpack://middle_diplom/./src/modules/formValidator.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\n\n    let start = performance.now();\n  \n    requestAnimationFrame(function animate(time) {\n      let timeFraction = (time - start) / duration;\n      if (timeFraction > 1) timeFraction = 1;\n  \n      let progress = timing(timeFraction);\n  \n      draw(progress);\n  \n      if (timeFraction < 1) {\n        requestAnimationFrame(animate);\n      }\n  \n    });\n  }\n\n  \n\n//# sourceURL=webpack://middle_diplom/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/imageZoom.js":
/*!**********************************!*\
  !*** ./src/modules/imageZoom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst imageZoom = () => {\n    const style = '.modal-img { z-index: 99; position: fixed; top: 2%; left: 33%; background: url(../images/documents/original/document4.jpg) center / cover; width: 654px; height: 900px; transition: 200ms;}'\n    const styleCreate = document.createElement('style')\n    styleCreate.innerText = style\n    document.head.appendChild(styleCreate)\n\n    const overlay = document.querySelector('.overlay')\n    const body = document.querySelector('body')\n    \n    const imgs = document.querySelectorAll('.sertificate-document');\n    const disableImgAttributes = document.querySelectorAll('.sertificate-document')\n    const hoverEffectImgs = document.querySelectorAll('.sertificate-document')\n    \n    hoverEffectImgs.forEach(hoverEffectImg => {\n        hoverEffectImg.addEventListener('mouseover', () => {\n            hoverEffectImg.style.transition = '0.2'\n            hoverEffectImg.style.opacity = \"0.5\"\n        })\n        hoverEffectImg.addEventListener('mouseout', () => {\n            hoverEffectImg.style.transition = '0.2'\n            hoverEffectImg.style.opacity = \"1\"\n        })\n    })\n    \n    disableImgAttributes.forEach(disableImgAttributes => {\n        disableImgAttributes.setAttribute('href', '')\n        disableImgAttributes.style.cursor = 'help'\n    })\n    \n    const addModalDocument = () => {\n        overlay.style.display = \"block\";\n        const modalDiv = document.createElement('div')\n        modalDiv.classList.add('modal-img')\n        body.append(modalDiv)\n        modalDiv.innerHTML = `\n        <span title=\"Close\" class=\"header-modal__close\">x</span>\n        `\n        document.addEventListener('click', (e) => {\n            if (e.target.closest('.overlay') || e.target.closest(\".header-modal__close\")) {\n                modalDiv.remove()\n                overlay.style.display = 'none'\n            }\n\n        })\n    }\n    \n    imgs.forEach(imgDiv => {\n        imgDiv.addEventListener('click', (e) => {\n            e.preventDefault()            \n            addModalDocument()\n        })\n    })    \n}\n    \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageZoom);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/imageZoom.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const headerModal = document.querySelector('.header-modal')\n    const serviceModal = document.querySelector('.services-modal')\n\n    const overlay = document.querySelector('.overlay')\n\n    const closeBtns = document.querySelectorAll('[title=\"Close\"]')\n    const fancyBtns = document.querySelectorAll('.fancyboxModal')\n\n    // console.log(closeBtns);\n\n    fancyBtns.forEach(btn => {\n        btn.addEventListener('click', (e) => {\n            if (btn.hash === '#callback') {\n                // console.log('#callback');\n                headerModal.style.display = 'block'\n                overlay.style.display = 'block'\n            } else if (btn.hash === '#application') {\n                // console.log('no application');\n                serviceModal.style.display = 'block'\n                overlay.style.display = 'block'\n                \n            }\n        })\n    })\n\n    closeBtns.forEach(btn => {\n        btn.addEventListener('click', () => {\n            headerModal.style.display = 'none'\n            overlay.style.display = 'none'\n            serviceModal.style.display = 'none'\n        })\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sliders.js":
/*!********************************!*\
  !*** ./src/modules/sliders.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliders = () => {\n    const benefitItems = document.querySelectorAll('.benefits__item')\n    const benefitsContent = document.querySelector('#benefits')\n    const cards = document.querySelectorAll('.col-md-12.col-lg-6')\n    const wraps = document.querySelector('.benefits-wrap') \n    const servicesArrows = document.querySelector('.services-arrows')\n\n    const style = '.not-active {display:none}'\n    const styleCreate = document.createElement('style')\n    styleCreate.innerText = style\n    document.head.appendChild(styleCreate)\n\n    let currentSlide = 0\n\n    wraps.style.justifyContent = 'center'\n\n    \n    const classMoverBenefitItems = () => {\n        document.addEventListener('click', (e) => {\n            if (e.target.closest('.benefits__arrow--right')) {\n                classSwitcher(benefitItems)\n            }\n            if (e.target.closest('.benefits__arrow--left')) {\n                classSwitcher(benefitItems)\n            }\n        })\n    }\n    const classMoverCards = () => {\n        document.addEventListener('click', (e) => {\n            if (e.target.closest('.services__arrow--right')) {\n                classSwitcher(cards)\n            }\n            if (e.target.closest('.services__arrow--left')) {\n                classSwitcher(cards)\n            }\n        })\n    }\n\n    if (window.innerWidth >= 576) {\n        classMoverBenefitItems()\n        classMoverCards()\n    }\n    const classSwitcher = (item) => {\n        item.forEach(item => {\n            if (item.classList.contains('not-active')) {\n                item.classList.remove('not-active')\n            } else {\n                item.classList.add('not-active')\n            }\n        })  \n    }\n    \n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    const checkForInnerWidth = (toIt) => {\n        let toItArr = Array.from(toIt)\n        toIt.forEach((item, i) => {\n            if (window.innerWidth >= 576) {\n                if (toItArr.length % 3 === 0){\n                    if (i > 2) {\n                        item.classList.add('not-active')\n                    }\n                } \n                if (toItArr.length % 4 === 0){\n                    if (i >= 2) {\n                        item.classList.add('not-active')\n                    }\n                }\n                //проверка на четность\\нечетность\n                    \n            } else if (i > 0) {\n                item.classList.add('not-active')\n            }\n        })\n        if (window.innerWidth < 576) {\n            benefitsContent.addEventListener('click', (e) => {\n                prevSlide(benefitItems, currentSlide, 'not-active')\n                if (e.target.closest('.benefits__arrow--right')) {\n                    currentSlide++\n                } else if (e.target.closest('.benefits__arrow--left')) {\n                    currentSlide--          \n                }\n                if (currentSlide >= benefitItems.length) {\n                    currentSlide = 0\n                }\n                if (currentSlide < 0) {\n                    currentSlide = benefitItems.length - 1\n                }\n                \n                nextSlide(benefitItems, currentSlide, 'not-active')\n            })\n            servicesArrows.addEventListener('click', (e) => {\n                prevSlide(cards, currentSlide, 'not-active')\n\n                if (e.target.closest('.services__arrow--right')) {\n                    currentSlide++\n                } else if (e.target.closest('.services__arrow--left')) {\n                    currentSlide--          \n                }\n                if (currentSlide >= cards.length) {\n                    currentSlide = 0\n                }\n                if (currentSlide < 0) {\n                    currentSlide = cards.length - 1\n                }\n        \n                nextSlide(cards, currentSlide, 'not-active')\n            }) \n        }\n    }\n\n    checkForInnerWidth(benefitItems)\n    checkForInnerWidth(cards)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sliders.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (discount) => {\n    const timerDaysBoxs = document.querySelectorAll('.count_1')\n    const timerHoursBoxs = document.querySelectorAll('.count_2')\n    const timerMinutesBoxs = document.querySelectorAll('.count_3')\n    const timerSecondsBoxs = document.querySelectorAll('.count_4')\n\n    const timerDaysBoxF = timerDaysBoxs[0]\n    const timerHoursBoxF = timerHoursBoxs[0]\n    const timerMinutesBoxF = timerMinutesBoxs[0]\n    const timerSecondsBoxF = timerSecondsBoxs[0]\n    \n    const timerDays = timerDaysBoxF.lastElementChild\n    const timerHours = timerHoursBoxF.lastElementChild\n    const timerMinutes = timerMinutesBoxF.lastElementChild\n    const timerSeconds = timerSecondsBoxF.lastElementChild\n\n    let intervalID\n\n    const getTimeRemaining = (discount) => {\n        let dateStop = new Date(discount).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\n        let hours = Math.floor(timeRemaining / 60 / 60) % 24\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return { timeRemaining, days, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining(discount)\n\n        timerDays.textContent = getTime.days\n        timerHours.textContent = getTime.hours\n        timerMinutes.textContent = getTime.minutes\n        timerSeconds.textContent = getTime.seconds\n\n        if (getTime.timeRemaining > 0) {\n            intervalID = setInterval(() => {\n                            updateClock()\n                        }, 1000);\n        } else if (getTime.timeRemaining <= 0) {\n            timerDays.textContent = '00'\n            timerHours.textContent = '00'\n            timerMinutes.textContent = '00'\n            timerSeconds.textContent = '00'\n            clearInterval(intervalID)\n        }\n        const zeroToNumber = () => {\n            if (getTime.days < 10 && getTime.days >= 0) {\n                timerDays.textContent = '0' + getTime.days\n            } \n            if (getTime.hours < 10 && getTime.days >= 0) {\n                timerHours.textContent = '0' + getTime.hours\n            }\n            if (getTime.minutes < 10 && getTime.days >= 0) {\n                timerMinutes.textContent = '0' + getTime.minutes\n            }\n            if (getTime.seconds < 10 && getTime.days >= 0) {\n                timerSeconds.textContent = '0' + getTime.seconds\n            }\n        }\n        const timeEqualify = () => {\n            timerDaysBoxs[1].lastElementChild.textContent = timerDays.textContent\n            timerHoursBoxs[1].lastElementChild.textContent = timerHours.textContent\n            timerMinutesBoxs[1].lastElementChild.textContent = timerMinutes.textContent\n            timerSecondsBoxs[1].lastElementChild.textContent = timerSeconds.textContent\n        }\n        zeroToNumber()\n        timeEqualify()\n    }\n    updateClock()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/toTop.js":
/*!******************************!*\
  !*** ./src/modules/toTop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toTop = () => {\n    const smoothScrollBtn = document.querySelector('.smooth-scroll')\n\n    smoothScrollBtn.style.display = 'none'\n    smoothScrollBtn.style.cursor = 'pointer'\n    \n    const trackingScroll = () => {\n        let scrolled = window.scrollY\n        let coordinates = document.documentElement.clientHeight\n        \n        if (scrolled > coordinates) {\n            smoothScrollBtn.style.display = 'block'\n        }else if (scrolled < coordinates) {\n            smoothScrollBtn.style.display = 'none'\n        }\n    }\n\n    function topFunction() {\n        window.scrollTo({top: 0, behavior: 'smooth'})\n    }\n\n    smoothScrollBtn.addEventListener('click', topFunction)\n    window.addEventListener('scroll', trackingScroll)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toTop);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/toTop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;