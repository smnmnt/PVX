const burgerBtn = () => {
    const navigationMenu = document.getElementById('navbar-collapse')

    document.addEventListener('click', (e) => {
        if ((e.target.closest('.navbar-toggle')) && (navigationMenu.classList.contains('collapse'))) {
            navigationMenu.classList.add('opened')
            navigationMenu.classList.remove('collapse')
        } else if ((e.target.closest('.navbar-toggle')) && (!navigationMenu.classList.contains('collapse'))) {
            navigationMenu.classList.remove('opened')
            navigationMenu.classList.add('collapse')
        }
    })
}

export default burgerBtn