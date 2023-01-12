const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName') //attribute input.value is what we care about

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("SUBMITED THE FORM!")
    const catName = input.value
    const newLI = document.createElement('LI')
    newLI.innerText = catName
    document.querySelector('#cats').append(newLI)
    input.value = ''
})

