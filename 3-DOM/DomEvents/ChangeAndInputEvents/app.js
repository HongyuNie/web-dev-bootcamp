const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// change event only show when mouse leave the editing window, or content inside changed; input event will fire when content changed with out clicking away

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD") 
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})