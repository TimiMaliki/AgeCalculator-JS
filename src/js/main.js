/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== Age Calculator =====*/

const btn = document.querySelector(".click-btn")



function dayFunc() {
    const day = document.querySelector(".ageInput").value
    const dayInputValue = day


    const birthDay = new Date(2024, 11, 31)
    const differenceInDay = birthDay.getDate()


    const userBirthDay = differenceInDay - dayInputValue

    document.querySelector(".age-display").innerText = userBirthDay

    if (document.querySelector(".age-display").innerText === "31") {
        document.querySelector(".age-display").innerText = null
    }

    monthFunc()
}

function monthFunc() {
    const month = document.querySelector(".monthInput").value
    const monthInputValue = month


    const birthMonth = new Date(2024, 11, 31)
    const getBirthMonth = birthMonth.getMonth()

    const userBirthMonth = getBirthMonth - monthInputValue

    document.querySelector(".month-display").innerText = userBirthMonth


    if (document.querySelector(".month-display").innerText === "11") {
        document.querySelector(".month-display").innerText = null
    }


    yearFunc()
}

function yearFunc() {
    const year = document.querySelector(".yearInput").value
    const yearInputValue = year

    const birthyear = new Date(2024, 11, 31)
    const getBirthYear = birthyear.getFullYear()

    const userBirthYear = getBirthYear - yearInputValue

    document.querySelector(".year-display").innerText = userBirthYear

    if (document.querySelector(".year-display").innerText === "2024") {
        document.querySelector(".year-display").innerText = null
        console.log("yes")
    } else {
        console.log("no")
    }

}


btn.addEventListener("click", dayFunc)
