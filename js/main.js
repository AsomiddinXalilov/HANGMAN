let LIST = document.getElementById('list')
let RESULT = document.getElementById('boxresult')
let BTN = document.getElementById('btn')

let alphabet = 97;

for (let i = 0; i < 26; i++) {
    let BUTTON = document.createElement('button')
    BUTTON.classList.add('btn')
    BUTTON.textContent = String.fromCharCode(alphabet)

    LIST.appendChild(BUTTON)
    alphabet ++

    BUTTON.addEventListener('click', () => {
        let newButton = BUTTON.cloneNode(true)
        RESULT.append(newButton)
    })
}

BTN.addEventListener('click', (e) => {
    RESULT.lastElementChild.remove()
})