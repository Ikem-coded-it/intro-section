"use strict"

function showPicture() {
    let imageContainer = document.getElementsByClassName('image-container')[0]
    let laptopGuyImage = document.createElement('img')
    laptopGuyImage.classList.add('laptop-guy-image')

    if (window.innerWidth < 600) {
        laptopGuyImage.setAttribute('src', './intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png')
    } else {
        laptopGuyImage.setAttribute('src', './intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png')
    }
    laptopGuyImage.setAttribute('alt', 'laptop guy')

    imageContainer.appendChild(laptopGuyImage);
}

function dropDown() {
    let dropDownMenus = document.getElementsByClassName('menu-item-dropdown');
    let arrDropDownMenus = Array.from(dropDownMenus)
    arrDropDownMenus.forEach(menu => {
        let dropDownButton = menu.childNodes[1];
        listener.showMenu(menu, dropDownButton);
    })
}

function listen() {
    const showMenu = function(menu, dropDownButton) {
        dropDownButton.addEventListener('click', () => {
            menu.childNodes[3].classList.toggle('show')
        })
        return
    }

    return {
        showMenu,
    }
}
const listener = listen();

showPicture()
dropDown()