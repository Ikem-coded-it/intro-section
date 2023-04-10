"use strict";
const listener = listen();

// Show specific picture whether page is opened on desktop or mobile
function showPicture() {
    let imageContainer = document.getElementsByClassName('image-container')[0]
    let laptopGuyImage = document.createElement('img')
    laptopGuyImage.classList.add('laptop-guy-image')

    if (window.innerWidth < 700) {
        laptopGuyImage.setAttribute(
            'src',
            './intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png'
        )

        // also initialize sidebar functions if it's a mobile screen
        showSideBar()
        closeSideBar()
    } else {
        laptopGuyImage.setAttribute(
            'src', 
            './intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png'
        )
    }
    laptopGuyImage.setAttribute('alt', 'laptop guy')

    imageContainer.appendChild(laptopGuyImage);
}

function dropDown() {
    let dropDownMenus = document.getElementsByClassName('menu-item-dropdown');
    let arrDropDownMenus = Array.from(dropDownMenus)
    arrDropDownMenus.forEach(menu => {
        let dropDownButton = menu.childNodes[1];
        listener.showDropDownMenu(menu, dropDownButton);
    })
}

function showSideBar() {
    let menuBtn = document.getElementsByClassName('menu-btn-container')[0];
    listener.openMenu(menuBtn)
}

function closeSideBar() {
    let closeMenuBtn = document.getElementsByClassName('close-menu-btn')[0]
    listener.closeMenu(closeMenuBtn)
}

/**
 * Adds event listners to buttons
 */
function listen() {
    const sideBar = document.getElementsByClassName('menu')[0]

    const showDropDownMenu = function(menu, dropDownButton) {
        dropDownButton.addEventListener('click', () => {
            menu.childNodes[3].classList.toggle('show')
        })
        return
    }

    const openMenu = function(menuBtn) {
        menuBtn.addEventListener('click', () => {
            sideBar.classList.toggle('show-menu');
            darken()
        })
        return
    }

    const closeMenu = function(closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            sideBar.classList.remove('show-menu');
            darken()
        })
        return
    }

    /**
     * Helpers
     */

    // Darkens and lightens background when side bar opens and closes
    const darken = function() {
        const body = document.getElementsByTagName('body')[0]
        body.classList.toggle('dark');
    }

    return {
        showDropDownMenu,
        openMenu,
        closeMenu,
    }
}

showPicture()
dropDown()